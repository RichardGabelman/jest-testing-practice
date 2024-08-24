import { Calculator } from "./calculator.js";

describe("calculator", () => {
  describe("add", () => {
    test("whole number", () => {
      expect(Calculator.add(1, 2)).toBe(3);
    });
    test("floating point", () => {
      expect(Calculator.add(1.02, 2.03)).toBeCloseTo(3.05);
    });
    test("string input", () => {
      expect(() => Calculator.add("test", "1")).toThrow(Error);
    });
    test("missing one input", () => {
      expect(() => Calculator.add(1)).toThrow(Error);
    });
    test("no input", () => {
      expect(() => Calculator.add()).toThrow(Error);
    });
  });
  describe("subtract", () => {
    test("whole number", () => {
      expect(Calculator.subtract(1, 2)).toBe(-1);
    });
    test("floating point", () => {
      expect(Calculator.subtract(1.02, 2.03)).toBeCloseTo(-1.01);
    });
    test("string input", () => {
      expect(() => Calculator.subtract("test", "1")).toThrow(Error);
    });
    test("missing one input", () => {
      expect(() => Calculator.subtract(1)).toThrow(Error);
    });
    test("no input", () => {
      expect(() => Calculator.subtract()).toThrow(Error);
    });
  });
  describe("divide", () => {
    test("whole number", () => {
      expect(Calculator.divide(4, 2)).toBe(2);
    });
    test("floating point", () => {
      expect(Calculator.divide(1, 2)).toBeCloseTo(0.5);
    });
    test("string input", () => {
      expect(() => Calculator.divide("test", "1")).toThrow(Error);
    });
    test("missing one input", () => {
      expect(() => Calculator.divide(1)).toThrow(Error);
    });
    test("no input", () => {
      expect(() => Calculator.divide()).toThrow(Error);
    });
  });
  describe("multiply", () => {
    test("whole number", () => {
      expect(Calculator.multiply(4, 2)).toBe(8);
    });
    test("floating point", () => {
      expect(Calculator.multiply(1.05, 2)).toBeCloseTo(2.1);
    });
    test("string input", () => {
      expect(() => Calculator.multiply("test", "1")).toThrow(Error);
    });
    test("missing one input", () => {
      expect(() => Calculator.multiply(1)).toThrow(Error);
    });
    test("no input", () => {
      expect(() => Calculator.multiply()).toThrow(Error);
    });
  });
});
