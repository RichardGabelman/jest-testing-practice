import { caesarCipher } from "./caesarCipher.js";

test("single lowercase no wrapping", () => {
  expect(caesarCipher("a", 1)).toBe("b");
});

test("single uppercase no wrapping", () => {
  expect(caesarCipher("A", 1)).toBe("B");
});

test("multiple lowercase no wrapping", () => {
  expect(caesarCipher("RAR", 1)).toBe("SBS");
});

test("multiple uppercase no wrapping", () => {
  expect(caesarCipher("XYY", 1)).toBe("YZZ");
});

test("multiple uppercase & lowercase no wrapping", () => {
  expect(caesarCipher("XYYabc", 1)).toBe("YZZbcd");
});

test("punctuation", () => {
  expect(caesarCipher(". ,/!@#$%^&*()-_", 2)).toBe(". ,/!@#$%^&*()-_");
});

test("single lowercase wrap", () => {
  expect(caesarCipher("z", 1)).toBe("a");
});

test("single uppercase wrap", () => {
  expect(caesarCipher("Z", 1)).toBe("A");
});

test("comprehensive test", () => {
  expect(caesarCipher("abcABC123xyzXYZ", 5)).toBe("fghFGH123cdeCDE");
});

