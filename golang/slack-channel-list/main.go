package main

import (
	"fmt"
	"os"

	"github.com/nlopes/slack"
)

func main() {
	token := os.Getenv("SLACK_API_TOKEN")
	if token == "" {
		fmt.Fprintf(os.Stderr, "SLAC_API_TOKEN is not found.\n")
		return
	}
	api := slack.New(token)

	teams, err := api.GetChannels(false)
	if err != nil {
		fmt.Printf("%s\n", err)
		return
	}

	for _, team := range teams {
		fmt.Printf("%s %s\n", team.ID, team.Name)
	}
}
