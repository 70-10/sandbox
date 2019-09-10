package main

import "fmt"

func main() {
	var a, b int
	fmt.Scanf("%d %d", &a, &b)
	fmt.Println(logic(a, b))
}

func logic(a, b int) string {
	if a*b%2 == 0 {
		return "Even"
	}

	return "Odd"
}
