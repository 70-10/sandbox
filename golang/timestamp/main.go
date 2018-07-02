package main

import (
	"flag"
	"fmt"
	"log"
	"time"
)

func main() {
	flag.Parse()
	args := flag.Args()

	t, err := getTime(args)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(t.UnixNano() / 1000000)
}

func getTime(args []string) (time.Time, error) {
	if len(args) <= 0 {
		return time.Now(), nil
	}

	format := "20060102150405"
	t, err := time.Parse(format, args[0])
	if err != nil {
		return time.Time{}, err
	}
	return t, nil
}
