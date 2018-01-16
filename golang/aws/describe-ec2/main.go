package main

import (
	"fmt"
	"strings"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/ec2"
)

func main() {
	svc := ec2.New(session.New(), &aws.Config{Region: aws.String("ap-northeast-1")})
	params := &ec2.DescribeInstancesInput{
		Filters: []*ec2.Filter{
			{
				Name: aws.String("instance-state-name"),
				Values: []*string{
					aws.String("running"),
				},
			},
		},
	}

	resp, err := svc.DescribeInstances(params)
	if err != nil {
		panic(err)
	}

	for _, res := range resp.Reservations {
		for _, instance := range res.Instances {
			fmt.Println(formatInstance(instance))
		}
	}
}

func formatInstance(inst *ec2.Instance) string {
	output := []string{
		*inst.PublicIpAddress,
		padRight(*inst.InstanceId, " ", 19),
		*inst.State.Name,
		(*inst.LaunchTime).Format("2006-01-02 15:04:05"),
		lookupTag(inst, "Name"),
	}
	return strings.Join(output[:], "\t")
}

func lookupTag(inst *ec2.Instance, key string) string {
	var value string
	for _, t := range inst.Tags {
		if *t.Key == key {
			value = *t.Value
			break
		}
	}
	return value
}

func padRight(str, pad string, lenght int) string {
	for {
		str += pad
		if len(str) > lenght {
			return str[0:lenght]
		}
	}
}
