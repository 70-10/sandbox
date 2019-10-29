import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

export const setup: APIGatewayProxyHandler = async (event, _context) => {
  const body = JSON.parse(event.body!) as SetupRequest;
  const responseBody: SetupResponse = {
    numbers: generateRandomNumbers(body.digits, body.available_numbers)
  };

  return {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  };
};

export const call: APIGatewayProxyHandler = async (event, _context) => {
  const body = JSON.parse(event.body!) as CallRequest;
  const responseBody: CallResponse = {
    call_numbers: generateRandomNumbers(body.digits, body.available_numbers)
  };

  return {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  };
};

export const attackItem: APIGatewayProxyHandler = async (_event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({})
  };
};

export const defenseItem: APIGatewayProxyHandler = async (_event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({})
  };
};

type SetupRequest = {
  digits: number;
  available_numbers: number[];
};

type SetupResponse = {
  numbers: number[];
};

type CallRequest = {
  digits: number;
  available_numbers: number[];
};

type CallResponse = {
  call_numbers: number[];
};

function generateRandomNumbers(length: number, available_numbers: number[]) {
  const arr: number[] = [];
  while (arr.length < length) {
    const r =
      available_numbers[Math.floor(Math.random() * available_numbers.length)];
    if (!arr.includes(r)) {
      arr.push(r);
    }
  }
  return arr;
}
