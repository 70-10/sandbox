package main

import (
	"flag"
	"os/exec"
	"strconv"
	"time"
)

func main() {
	setCount := flag.Int("count", 1, "set count")
	flag.Parse()

	count := 0
	say("スタートします")

	for {
		time.Sleep(1 * time.Second)
		count++

		if count%10 == 0 {
			if count/10 == *setCount {
				say(strconv.Itoa(count) + "秒。終了です。")
				break
			}
			say(strconv.Itoa(count) + "秒")
		}
	}
}

func say(msg string) {
	exec := exec.Command("say", "-v", "Kyoko", msg)
	exec.Start()
}
