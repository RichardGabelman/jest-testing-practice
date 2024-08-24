import { analyzeArray } from "./analyzeArray.js";

test("whole number array", () => {
  const object = analyzeArray([1,8,3,4,2,6]);
  expect(object.average).toBe(4);
  expect(object.min).toBe(1);
  expect(object.max).toBe(8);
  expect(object.length).toBe(6);
});

test("empty array", () => {
  const object = analyzeArray([]);
  expect(object).toBeNull();
});

test("non-number array", () => {
  expect(() => analyzeArray(["Hello", "Thanks"])).toThrow(Error);
});

test("floating point number array", () => {
  const object = analyzeArray([1.03,8.99,3.14159,4.0,-2.01,6.55]);
  expect(object.average).toBeCloseTo(3.61693166667);
  expect(object.min).toBeCloseTo(-2.01);
  expect(object.max).toBeCloseTo(8.99);
  expect(object.length).toBeCloseTo(6);
});

test("empty input", () => {
  expect(() => analyzeArray()).toThrow(Error);
});

test("non-array input", () => {
  expect(() => analyzeArray(5)).toThrow(Error);
});