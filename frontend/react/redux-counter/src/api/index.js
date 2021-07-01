import "cross-fetch/polyfill";
import url from "url";
const BaseURL = "http://localhost:8000";

export const get = async path => {
  const res = await fetch(url.resolve(BaseURL, path));
  return res;
};

export default { get };
