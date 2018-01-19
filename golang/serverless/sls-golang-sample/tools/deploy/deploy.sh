#!/bin/sh -e

if [ -z $NODE_ENV ]; then
  NODE_ENV=DEV;
fi

echo AWS_PROFILE=$AWS_PROFILE
echo STAGE=$NODE_ENV

if [ -z $AWS_PROFILE ]; then
  echo AWS_PROFILE is required!;
  exit 1;
fi

sls deploy -v -s $NODE_ENV
