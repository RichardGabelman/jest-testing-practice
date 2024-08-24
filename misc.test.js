import { capitalize } from "./misc.js";
import { reverseString } from "./misc.js";

// capitalize
test("simple base case", () => {
  expect(capitalize("hello!")).toBe("Hello!");
});

test("already capitalized", () => {
  expect(capitalize("Testing")).toBe("Testing");
});

test("empty (but present) input", () => {
  expect(capitalize("")).toBe("");
});

test("no input", () => {
  expect(() => capitalize()).toThrow(Error);
});

test("integer input", () => {
  expect(() => capitalize(4)).toThrow(Error);
});

// reverse string
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