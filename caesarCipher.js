export function caesarCipher(str, shift) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (!((/[a-zA-Z]/).test(str[i]))) {
      result.push(str[i]);
      continue;
    }
    const currCharCode = str.charCodeAt(i);
    // uppercase
    if (currCharCode <= 'Z'.charCodeAt(0) && (currCharCode + shift) > 'Z'.charCodeAt(0)) {
      const diff = (currCharCode + shift) - 'Z'.charCodeAt(0);
      const newCharCode = diff + 'A'.charCodeAt(0) - 1;
      result.push(String.fromCharCode(newCharCode));
      continue;      
    }
    // lowercase
    if (currCharCode <= 'z'.charCodeAt(0) && (currCharCode + shift) > 'z'.charCodeAt(0)) {
      const diff = (currCharCode + shift) - 'z'.charCodeAt(0);
      const newCharCode = diff + 'a'.charCodeAt(0) - 1;
      result.push(String.fromCharCode(newCharCode));
      continue;
    }
    result.push(String.fromCharCode(currCharCode + shift));
  }
  return result.join("");
}