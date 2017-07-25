package main

import (
	"fmt"
	"log"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/sqs"
)

func main() {
	svc, err := NewSQS(&aws.Config{
		Endpoint: aws.String("http://localhost:4576"),
		Region:   aws.String("ap-northeast-1"),
	})

	params := &sqs.CreateQueueInput{
		QueueName: aws.String("test-queue"),
	}

	resp, err := svc.CreateQueue(params)
	if err != nil {
		log.Fatal(err)
		return
	}

	fmt.Println(*resp.QueueUrl)

}

func NewSQS(config *aws.Config) (*sqs.SQS, error) {
	session, err := session.NewSession()
	if err != nil {
		return nil, err
	}

	svc := sqs.New(session, config)
	return svc, nil
}
