FROM golang:alpine as build

ENV GOOS=linux
ENV GOARCH=amd64

WORKDIR /tmp/http-server
COPY . .
RUN go build

FROM alpine:latest
COPY --from=build /tmp/http-server/http-server /app
EXPOSE 8080
ENTRYPOINT [ "/app" ]
