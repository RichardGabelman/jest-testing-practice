export function analyzeArray(arr) {
  if (arr.length === 0) {
    return null;
  }
  let total = 0;
  let min = arr[0];
  let max = arr[0];
  for (const num of arr) {
    if (typeof num !== "number") {
      console.log(num);
      throw new Error("Expected nums");
    }
    total += num;
    min = Math.min(min, num);
    max = Math.max(max, num);
  }
  const avg = total / arr.length;
  return { "average": avg, "min": min, "max": max, "length": arr.length };
}