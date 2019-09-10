package main

import (
	"fmt"
	"strconv"
)

func main() {
	var a string
	fmt.Scanf("%s", &a)
	fmt.Println(logic(get(a, 0), get(a, 1), get(a, 2)))
}

func logic(a, b, c int) int {
	return a + b + c
}

func get(s string, num int) int {
	i, _ := strconv.Atoi(string([]rune(s)[num]))
	return i
}
