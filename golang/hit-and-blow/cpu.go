package main

import (
	"math/rand"
	"time"
)

func NewCPU(length int) Player {
	return Player{Numbers: generateNumbers(length), Call: cpuCall}
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

func contains(arr []int, num int) bool {
	for _, v := range arr {
		if v == num {
			return true
		}
	}

	return false
}

func cpuCall(length int) ([]int, error) {
	return generateNumbers(length), nil
}
