type JsonValue = null | boolean | number | string | JsonValue[] | {
  [key: string]: JsonValue;
};

interface JsonObject {
  [key: string]: JsonValue;
}

function isJsonObject(value: JsonValue): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function sortObjectByKey(obj: JsonObject): JsonObject {
  const sortedKeys = Object.keys(obj).sort();

  return sortedKeys.reduce((sortedObj, key) => {
    const value = obj[key];

    sortedObj[key] = isJsonObject(value) ? sortObjectByKey(value) : value;

    return sortedObj;
  }, {} as JsonObject);
}
