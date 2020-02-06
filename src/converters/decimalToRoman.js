export default function decimaltoRoman(decimal) {
  const dic = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let roman = "";
  for (let i in dic) {
    while (decimal >= dic[i]) {
      roman += i;
      decimal -= dic[i];
    }
  }
  return roman;
}
