FROM python:3.5-alpine

RUN apk add --update --no-cache libffi-dev build-base openssl-dev
RUN pip install boto boto3 ansible

COPY ssh/build-server_ec2-user.pem /root/.ssh/build-server_ec2-user.pem
RUN chmod 600 /root/.ssh/build-server_ec2-user.pem

WORKDIR /ansible
