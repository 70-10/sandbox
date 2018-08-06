import { APIGatewayEvent, Context, Handler, APIGatewayProxyResult } from "aws-lambda";

export const hello: Handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
      input: event,
    }),
  };

  return response;
};
