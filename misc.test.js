import { capitalize } from "./misc.js";

// capitalize
test('simple base case', () => {
  expect(capitalize('hello!')).toBe('Hello!');
});

test('already capitalized', () => {
  expect(capitalize('Testing')).toBe('Testing');
});

test('empty (but present) input', () => {
  expect(capitalize('')).toBe('');
});

test('no input', () => {
  expect(() => capitalize()).toThrow(Error);
});

test('integer input', () => {
  expect(() => capitalize(4)).toThrow(Error);
});