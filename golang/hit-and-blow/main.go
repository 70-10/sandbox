package main

import (
	"fmt"
	"sort"
)

const length = 4

func main() {
	fmt.Printf("自分の%d桁の数字を入力してください\n> ", length)

	player := NewPlayer(length)
	cpu := NewCPU(length)
	fmt.Println(highandlow(cpu.Numbers, length))
	// fmt.Println(slash(cpu.Numbers))
	game := NewGame()

	for {
		fmt.Printf("%dターン目\n", game.Turn)
		fmt.Printf("%d桁の数字を入力してください\n> ", length)
		callNums, err := player.Call(length)
		if err != nil {
			fmt.Printf("%s\n> ", err.Error())
			continue
		}
		result := game.Check(callNums, cpu.Numbers)
		game.AddLog(callNums, result)

		fmt.Printf("You: %dHit %dblow\n", result.Hit, result.Blow)
		if result.Hit == length {
			fmt.Println("あなたの勝利です")
			break
		}
		cpuCallNums, _ := cpu.Call(length)
		r := game.Check(cpuCallNums, player.Numbers)
		game.AddLog(cpuCallNums, r)

		fmt.Printf("CPU: %dHit %dblow\n", r.Hit, r.Blow)
		if r.Hit == 3 {
			fmt.Println("あなたの負けです")
			break
		}
		game.AddTurn()
	}
	fmt.Println(game.Logs)
}

func highandlow(numbers []int, length int) []string {
	result := make([]string, length)

	for i, n := range numbers {
		if n < 5 {
			result[i] = "Low"
		} else {
			result[i] = "High"
		}
	}
	return result
}

func slash(numbers []int) int {
	num := make([]int, len(numbers))
	copy(num, numbers)
	sort.Ints(num)
	return num[len(num)-1] - num[0]
}
