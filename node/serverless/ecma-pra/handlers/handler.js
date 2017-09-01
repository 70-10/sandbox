export default function(handleFn) {
  return async (event, context, callback) => {
    const result = await handleFn(event, context).catch(callback);
    const response = {
      statusCode: result.statusCode || 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result.body)
    };
    callback(null, response);
  };
}
