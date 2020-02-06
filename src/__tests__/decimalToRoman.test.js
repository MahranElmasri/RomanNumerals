import decimalToRoman from "../converters/decimalToRoman";

describe("Test the decimal value between 1-10", () => {
  it("should return equvelant roman numeral value", () => {
    expect(decimalToRoman(1)).toBe("I");
    expect(decimalToRoman(2)).toBe("II");
    expect(decimalToRoman(3)).toBe("III");
    expect(decimalToRoman(4)).toBe("IV");
    expect(decimalToRoman(5)).toBe("V");
    expect(decimalToRoman(6)).toBe("VI");
    expect(decimalToRoman(7)).toBe("VII");
    expect(decimalToRoman(8)).toBe("VIII");
    expect(decimalToRoman(9)).toBe("IX");
    expect(decimalToRoman(10)).toBe("X");
  });
});

describe("Test the decimal value between 20-1000", () => {
  it("should return equvelant roman numeral value", () => {
    expect(decimalToRoman(20)).toBe("XX");
    expect(decimalToRoman(30)).toBe("XXX");
    expect(decimalToRoman(40)).toBe("XL");
    expect(decimalToRoman(50)).toBe("L");
    expect(decimalToRoman(60)).toBe("LX");
    expect(decimalToRoman(70)).toBe("LXX");
    expect(decimalToRoman(80)).toBe("LXXX");
    expect(decimalToRoman(90)).toBe("XC");
    expect(decimalToRoman(100)).toBe("C");
    expect(decimalToRoman(200)).toBe("CC");
    expect(decimalToRoman(300)).toBe("CCC");
    expect(decimalToRoman(400)).toBe("CD");
    expect(decimalToRoman(500)).toBe("D");
    expect(decimalToRoman(1000)).toBe("M");
  });
});
