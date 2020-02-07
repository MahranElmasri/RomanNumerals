export default function romanToDecimal(roman) {
  if (roman === null) return -1;
  let num = charToInt(roman.charAt(0));
  let pre, curr;

  for (let i = 1; i < roman.length; i++) {
    curr = charToInt(roman.charAt(i));
    pre = charToInt(roman.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }

  return num;
}

function charToInt(char) {
  switch (char) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}
