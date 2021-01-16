import axios from "axios";
import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export const writeToFile = (dist: string = "./flowtype.js", result: string) => {
  fs.writeFile(dist, result, (err) => {
    if (err) {
      throw err;
    }
  });
};

export const isUrl = (value: string): boolean =>
  value.match(/https?:\/\//) !== null;

export const distFile = (p: Object, inputFileName: string): string => {
  if (p.destination) {
    return p.destination;
  }
  if (isUrl(inputFileName)) {
    return "./flowtype.js";
  }

  const ext = path.parse(inputFileName).ext;
  return inputFileName.replace(ext, ".js");
};

export const getContentFromFile = (file: string): Object => {
  const ext = path.extname(file);
  const readFile = fs.readFileSync(file, "utf8");
  return ext === ".yaml" || ext === ".yml"
    ? yaml.safeLoad(readFile)
    : JSON.parse(readFile);
};

export const isObject = (value: any): boolean =>
  typeof value === "object" && value !== null;

export const getContentFromUrl = (url: string): Promise<Object> =>
  axios({
    method: "get",
    url,
  }).then((response) => {
    const { data } = response;
    return isObject(data) ? data : yaml.safeLoad(data);
  });

export const getContent = (fileOrUrl: string): Promise<Object> => {
  if (isUrl(fileOrUrl)) {
    return getContentFromUrl(fileOrUrl);
  }
  const content = getContentFromFile(fileOrUrl);
  return Promise.resolve(content);
};
