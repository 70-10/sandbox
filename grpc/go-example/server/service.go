package main

import (
	"context"

	pb "github.com/70-10/sandbox/grpc/go-example/proto"
)

type echoService struct{}

func (s *echoService) Echo(ctx context.Context, req *pb.EchoRequest) (*pb.EchoResponse, error) {
	res := &pb.EchoResponse{
		Message: req.GetMessage(),
	}

	return res, nil
}
