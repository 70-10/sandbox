FROM python:2.7-alpine

RUN apk add --update --no-cache libffi-dev build-base openssl-dev
RUN pip install fabric cuisine fabtools

WORKDIR /tmp/src

ENTRYPOINT ["fab"]
