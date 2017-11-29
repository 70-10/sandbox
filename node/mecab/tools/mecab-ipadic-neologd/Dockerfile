FROM ubuntu:latest

RUN apt-get update && apt-get install mecab libmecab-dev mecab-ipadic-utf8 git make curl xz-utils file git -y

RUN git clone --depth 1 https://github.com/neologd/mecab-ipadic-neologd.git /tmp/mecab-ipadic-neologd
WORKDIR /tmp/mecab-ipadic-neologd

CMD ["./bin/install-mecab-ipadic-neologd", "-n", "-u", "-y"]
