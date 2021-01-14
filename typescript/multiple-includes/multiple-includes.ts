const multipleIncludes = (
  text: string,
  pattern: string | string[],
  conditions: "and" | "or" = "or"
) => {
  if (typeof pattern === "string") {
    return text.includes(pattern);
  }

  if (conditions === "and") {
    for (const word of pattern) {
      if (!text.includes(word)) {
        return false;
      }
    }

    return true;
  }

  for (const word of pattern) {
    if (text.includes(word)) {
      return true;
    }
  }
  return false;
};

export default multipleIncludes;
