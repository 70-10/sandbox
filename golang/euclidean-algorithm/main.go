package main

import (
	"fmt"
)

func main() {
	fmt.Println(gcd(318691696, 4729749))
}

func gcd(a, b int) int {
	if b == 0 {
		return a
	}
	return gcd(b, a%b)
}

func lcm(a, b int) int {
	return a / gcd(a, b) * b
}
