package main

type Game struct {
	Turn int
	Logs []Log
}

type Log struct {
	Turn       int
	CallNumber []int
	Result     Result
}

type Result struct {
	Hit  int
	Blow int
}

func (g *Game) AddTurn() {
	g.Turn++
}

// Check the results
func (g *Game) Check(expect, actual []int) Result {
	h := 0
	b := 0
	for i, n := range expect {
		if n == actual[i] {
			h++
			continue
		}

		for _, v := range actual {
			if v == n {
				b++
				break
			}
		}
	}
	return Result{Hit: h, Blow: b}
}

func (g *Game) AddLog(callNumber []int, result Result) {
	g.Logs = append(g.Logs, Log{Turn: g.Turn, CallNumber: callNumber, Result: result})
}

func NewGame() Game {
	return Game{Turn: 1}
}
