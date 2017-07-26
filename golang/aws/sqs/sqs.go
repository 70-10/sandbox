package main

import (
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/sqs"
)

func NewSQS(config *aws.Config) (*sqs.SQS, error) {
	session, err := session.NewSession()
	if err != nil {
		return nil, err
	}

	return sqs.New(session, config), nil
}
