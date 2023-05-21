function multipleIncludes(
  text: string,
  patterns: string | string[],
  conditions: "and" | "or" = "or"
): boolean {
  if (typeof patterns === "string") {
    return text.includes(patterns);
  }

  if (conditions === "and") {
    return patterns.every((pattern) => text.includes(pattern));
  }

  return patterns.some((pattern) => text.includes(pattern));
}

export default multipleIncludes;
