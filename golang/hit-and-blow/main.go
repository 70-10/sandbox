package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"time"
)

const length = 3

func checkWeakestCPU(answer []int) (int, int) {
	expect := generateNumbers(len(answer))
	return check(expect, answer)
}

func scanNumbers(text string) ([]int, error) {
	nums := []int{}
	for _, s := range text {
		n, err := strconv.Atoi(string(s))
		if err != nil {
			return nil, fmt.Errorf("数字を入力してください")
		}
		for _, v := range nums {
			if v == n {
				return nil, fmt.Errorf("数字が重複しています")
			}
		}
		nums = append(nums, n)
	}

	return nums, nil
}

func main() {
	var userNums []int
	var count int = 1

	fmt.Printf("自分の%d桁の数字を入力してください\n> ", length)
	s := bufio.NewScanner(os.Stdin)
	for s.Scan() {
		t := s.Text()
		nums, err := scanNumbers(t)
		if err != nil {
			fmt.Println(err.Error())
			fmt.Printf("> ")
			continue
		}
		if len(nums) != length {
			fmt.Printf("%d桁の数字を入力してください\n> ", length)
			continue
		}

		userNums = nums
		break
	}

	cpuNums := generateNumbers(length)

	fmt.Printf("%d桁の数字を入力してください\n> ", length)

	scanner := bufio.NewScanner(os.Stdin)
	for scanner.Scan() {
		text := scanner.Text()
		nums, err := scanNumbers(text)
		if err != nil {
			fmt.Println(err.Error())
			fmt.Printf("> ")
			continue
		}

		if len(nums) != length {
			fmt.Printf("%d桁の数字を入力してください\n> ", length)
			continue
		}

		hit, blow := check(nums, cpuNums)

		fmt.Printf("%dターン目\n", count)

		fmt.Printf("You: %dHit %dblow\n", hit, blow)
		if hit == 3 {
			fmt.Println("あなたの勝利です")
			break
		}
		h, b := checkWeakestCPU(userNums)

		fmt.Printf("CPU: %dHit %dblow\n", h, b)
		if h == 3 {
			fmt.Println("あなたの負けです")
			break
		}
		count++
		fmt.Printf("> ")
	}
}

func contains(arr []int, num int) bool {
	for _, v := range arr {
		if v == num {
			return true
		}
	}

	return false
}

func generateNumbers(length int) []int {
	var nums []int

	rand.Seed(time.Now().UnixNano())
	for {
		if len(nums) == length {
			break
		}

		num := rand.Intn(10)
		if !contains(nums, num) {
			nums = append(nums, num)
		}

	}
	return nums
}

func check(expect, actual []int) (int, int) {
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
	return h, b
}
