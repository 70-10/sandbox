const Ajv = require("ajv");
const ajv = new Ajv();

function validate(schema, data) {
  return new Promise((resolve, reject) => {
    const validate = ajv.compile(schema);
    if (!validate(data)) {
      reject(validate.errors);
    }
    resolve();
  });
}

async function main() {
  const schema = {
    properties: {
      sample: {
        type: "object",
        required: ["key"],
        properties: {
          key: {
            type: "string"
          }
        }
      }
    }
  };

  const data = {
    sample: {
      key: "sample-key"
    }
  };

  await validate(schema, { sample: { key: "sample-key" } });
  await validate(schema, { sample: { key: 0 } }).catch(console.error);
  await validate(schema, { sample: {} }).catch(console.error);
}

main().catch(console.error);
