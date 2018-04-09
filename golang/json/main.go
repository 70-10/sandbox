package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
)

func main() {
	bytes, err := ioutil.ReadFile("sample.json")
	if err != nil {
		log.Fatal(err)
	}
	var sample Sample
	if err := json.Unmarshal(bytes, &sample); err != nil {
		log.Fatal(err)
	}

	fmt.Println(sample)
}

type Sample struct {
	Users []User `json:"users"`
}
type User struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
	Age  int    `json:"age"`
}
