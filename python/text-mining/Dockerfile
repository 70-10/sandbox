FROM python:3-alpine

ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ JST-9

RUN apk add --no-cache git build-base bash curl openssl sudo openblas-dev

RUN git clone https://github.com/taku910/mecab.git /mecab
WORKDIR /mecab/mecab
RUN ./configure --enable-utf8-only && \
    make && \
    make install

RUN git clone --depth 1 https://github.com/neologd/mecab-ipadic-neologd.git /mecab-ipadic-neologd && \
    /mecab-ipadic-neologd/bin/install-mecab-ipadic-neologd -n -a -y -p /usr/local/lib/mecab/dic/mecab-ipadic-neologd

RUN echo "dicdir = /usr/local/lib/mecab/dic/mecab-ipadic-neologd" > /usr/local/etc/mecabrc

RUN rm -rf /mecab && \
    rm -rf /mecab-ipadic-neologd

RUN pip install mecab-python gensim