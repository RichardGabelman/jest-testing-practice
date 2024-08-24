export class Calculator {
  static add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Expected 2 numbers");
    }
    return x + y;
  }

  static subtract(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Expected 2 numbers");
    }
    return x - y;
  }

  static divide(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Expected 2 numbers");
    }
    return x / y;
  }

  static multiply(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Expected 2 numbers");
    }
    return x * y;
  }
}
