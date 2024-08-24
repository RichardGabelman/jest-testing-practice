import { reverseString } from "./reverseString.js";

describe("reverseString", () => {
  test("simple base case", () => {
    expect(reverseString("hello!")).toBe("!olleh");
  });
  
  test("empty (but present) input", () => {
    expect(reverseString("")).toBe("");
  });
  
  test("no input", () => {
    expect(() => reverseString()).toThrow(Error);
  });
  
  test("non-string input", () => {
    expect(() => reverseString(4)).toThrow(Error);
  });
});