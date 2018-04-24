module.exports = {
  handler
};

async function handler(event, context) {
  return { body: { event, context } };
}
