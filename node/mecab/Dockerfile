FROM node:8-alpine

RUN apk add --update --no-cache build-base

ADD https://drive.google.com/uc?export=download&id=0B4y35FiV1wh7cENtOXlicTFaRUE /tmp/mecab-0.996.tar.gz

RUN tar -xzf /tmp/mecab-0.996.tar.gz -C /tmp
WORKDIR /tmp/mecab-0.996
RUN ./configure --with-charset=utf8 --enable-utf8-only \
    && make \
    && make install

COPY . /mecab
WORKDIR /mecab
RUN npm install

CMD ["npm", "start"]
