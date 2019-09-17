package main

import "fmt"

func main() {
	var num int
	fmt.Scanf("%d", &num)

	var n = make([]int, num)
	var s = make([]interface{}, num)
	for i := range n {
		s[i] = &n[i]
	}
	fmt.Scanln(s...)

	fmt.Println(logic(n, 0))
}

func logic(nums []int, count int) int {
	result := []int{}
	for _, n := range nums {
		if n%2 != 0 {
			return count
		}
		result = append(result, n/2)
	}

	return logic(result, count+1)
}
