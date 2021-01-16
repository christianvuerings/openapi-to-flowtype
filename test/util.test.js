import path from "path";
import { isUrl, getContentFromFile, getContentFromUrl } from "../src/util";

jest.createMockFromModule("commander");

describe("Utility functions", () => {
  describe("isURL", () => {
    it("should return true when value is URL", () => {
      expect(isUrl("https://sample.com/json")).toEqual(true);
    });

    it("should return false when value is not URL", () => {
      expect(isUrl("/Users/foo/sample.json")).toEqual(false);
    });
  });
});

describe("Get content from URL or file", () => {
  describe("Get content from URL", () => {
    it("should return object from JSON response", () => {
      const url =
        "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/json/uber.json";
      return getContentFromUrl(url).then((res) => {
        expect(res.swagger).toEqual("2.0");
      });
    });
    it("should return object from yaml response", () => {
      const url =
        "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/yaml/uber.yaml";
      return getContentFromUrl(url).then((res) => {
        expect(res.swagger).toEqual("2.0");
      });
    });
  });

  describe("Get content from file", () => {
    it("should return object from JSON file", () => {
      const file = path.join(__dirname, "__mocks__/openapi.json");
      const content = getContentFromFile(file);
      expect(content.openapi).toEqual("3.0.1");
    });
    it("should return object from yaml file", () => {
      const file = path.join(__dirname, "__mocks__/openapi.yaml");
      const content = getContentFromFile(file);
      expect(content.openapi).toEqual("3.0.1");
    });
  });
});
