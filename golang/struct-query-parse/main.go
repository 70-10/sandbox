package main

import (
	"fmt"

	"github.com/google/go-querystring/query"
)

type User struct {
	Name string `url:"name"`
	Age  int    `url:"age"`
}

func main() {
	u := User{Name: "taro", Age: 10}
	v, err := query.Values(u)
	if err != nil {
		panic(err)
	}
	fmt.Println(v.Encode())
}
