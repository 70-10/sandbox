package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

type Player struct {
	Numbers []int
	Call    func(length int) ([]int, error)
}

func NewPlayer(length int) Player {
	return Player{Numbers: inputPlayerNumbers(length), Call: call}
}

func inputPlayerNumbers(length int) []int {
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

		return nums
	}
	return []int{}
}

func call(length int) ([]int, error) {
	scanner := bufio.NewScanner(os.Stdin)
	for scanner.Scan() {
		text := scanner.Text()
		nums, err := scanNumbers(text)
		if err != nil {
			return nil, err
		}

		if len(nums) != length {
			return nil, fmt.Errorf("%d桁の数字を入力してください", length)
		}

		return nums, nil
	}
	return []int{}, nil
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
