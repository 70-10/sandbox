package main

import (
	"log"
	"net"

	pb "github.com/70-10/sandbox/grpc/go-example/proto"
	"google.golang.org/grpc"
)

func main() {
	port := ":50051"
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen %v\n", err)
	}

	srv := grpc.NewServer()
	pb.RegisterEchoServiceServer(srv, &echoService{})

	log.Printf("start server on ports%s\n", port)
	if err := srv.Serve(lis); err != nil {
		log.Printf("failed to serve: %v\n", err)
	}
}
