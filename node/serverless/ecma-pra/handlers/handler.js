export default function(handleFn) {
  return async (event, context, callback) => {
    const result = await handleFn(event, context).catch(err => {
      console.error(err);
      callback(null, createHTTPResponse(500, err));
    });

    callback(null, createHTTPResponse(result.statusCode || 200, result.body));
  };
}

function createHTTPResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(body)
  };
}
