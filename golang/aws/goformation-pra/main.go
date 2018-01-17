package main

import (
	"fmt"

	"github.com/awslabs/goformation/cloudformation"
)

func main() {
	template := cloudformation.NewTemplate()
	template.Resources["MySNSTopic"] = &cloudformation.AWSSNSTopic{
		DisplayName: "test-sns-topic-display-name",
		TopicName:   "test-sns-topic-name",
		Subscription: []cloudformation.AWSSNSTopic_Subscription{
			cloudformation.AWSSNSTopic_Subscription{
				Endpoint: "test-sns-topic-subscription-endpoint",
				Protocol: "test-sns-topic-subscription-protocol",
			},
		},
	}
	j, err := template.JSON()
	if err != nil {
		panic(err)
	}

	fmt.Println("---------- JSON ----------")
	fmt.Printf("%s\n", string(j))

	y, err := template.YAML()
	if err != nil {
		panic(err)
	}

	fmt.Println("---------- YAML ----------")
	fmt.Printf("%s\n", string(y))
}
