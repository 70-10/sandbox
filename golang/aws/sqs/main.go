package main

import (
	"fmt"
	"log"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/sqs"
)

const (
	endpoint  = "http://localhost:4576"
	region    = "ap-northeast-1"
	queueName = "test-queue"
)

func main() {
	svc, err := NewSQS(&aws.Config{
		Endpoint: aws.String(endpoint),
		Region:   aws.String(region),
	})

	resp, err := createQueue(svc, queueName)
	if err != nil {
		log.Fatal(err)
		return
	}

	queueUrl := *resp.QueueUrl

	res, err := sendMessage(svc, "test message", queueUrl)
	if err != nil {
		log.Fatal(err)
		return
	}
	fmt.Println(*res.MessageId)
	fmt.Println(*res.MD5OfMessageBody)
}

func createQueue(svc *sqs.SQS, queueName string) (*sqs.CreateQueueOutput, error) {
	params := &sqs.CreateQueueInput{
		QueueName: aws.String(queueName),
	}
	return svc.CreateQueue(params)
}

func sendMessage(svc *sqs.SQS, message, queueUrl string) (*sqs.SendMessageOutput, error) {
	params := &sqs.SendMessageInput{
		MessageBody:  aws.String(message),
		QueueUrl:     aws.String(queueUrl),
		DelaySeconds: aws.Int64(1),
	}

	return svc.SendMessage(params)
}
