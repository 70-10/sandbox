package main

import "testing"
import "github.com/aws/aws-sdk-go/aws"
import "github.com/aws/aws-sdk-go/service/sqs"

const (
	endpoint  = "http://localhost:4576"
	region    = "ap-northeast-1"
	queueName = "test-queue"
)

func TestNewSQS(t *testing.T) {
	config := &aws.Config{
		Endpoint: aws.String(endpoint),
		Region:   aws.String(region),
	}

	svc, err := NewSQS(config)

	if err != nil {
		t.Error(err)
	}

	params := &sqs.CreateQueueInput{
		QueueName: aws.String(queueName),
	}

	resp, err := svc.CreateQueue(params)
	if err != nil {
		t.Error(err)
	}

	if *resp.QueueUrl != "http://localhost:4576/123456789012/test-queue" {
		t.Error(*resp.QueueUrl)
	}
}
