package main

import (
	"crypto/sha256"
	"encoding/hex"
	"flag"
	"fmt"
	"os"
	"strings"
)

func main() {
	flag.Parse()
	args := flag.Args()
	if len(args) <= 0 {
		os.Stderr.WriteString("Please input text\n")
		return
	}

	result := sha256.Sum256([]byte(args[0]))
	fmt.Println(strings.ToUpper(hex.EncodeToString(result[:])))
}
