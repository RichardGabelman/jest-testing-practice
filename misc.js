// capitalize
export function capitalize(str) {
  if (str === ``) {
    return ``;
  }
  if (typeof str === "undefined") {
    throw new Error("No input given to capitalize function");
  }
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

// reverseString
export function reverseString(str) {
  return [...str].reverse().join("");
}

// calculator

// caesarCipher

// analyzeArray
