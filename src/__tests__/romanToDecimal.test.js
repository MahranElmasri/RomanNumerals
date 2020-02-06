import romanToDecimal from "../converters/romanToDecimal";

describe("Test the decimal value between 1-10", () => {
  it("should return equvelant roman numeral value", () => {
    expect(romanToDecimal("I")).toBe(1);
    expect(romanToDecimal("II")).toBe(2);
    expect(romanToDecimal("III")).toBe(3);
    expect(romanToDecimal("IV")).toBe(4);
    expect(romanToDecimal("V")).toBe(5);
    expect(romanToDecimal("VI")).toBe(6);
    expect(romanToDecimal("VII")).toBe(7);
    expect(romanToDecimal("VIII")).toBe(8);
    expect(romanToDecimal("IX")).toBe(9);
    expect(romanToDecimal("X")).toBe(10);
  });
});

describe("Test the decimal value between 20-1000", () => {
  it("should return equvelant roman numeral value", () => {
    expect(romanToDecimal("XX")).toBe(20);
    expect(romanToDecimal("XXX")).toBe(30);
    expect(romanToDecimal("XL")).toBe(40);
    expect(romanToDecimal("L")).toBe(50);
    expect(romanToDecimal("LX")).toBe(60);
    expect(romanToDecimal("LXX")).toBe(70);
    expect(romanToDecimal("LXXX")).toBe(80);
    expect(romanToDecimal("XC")).toBe(90);
    expect(romanToDecimal("C")).toBe(100);
    expect(romanToDecimal("M")).toBe(1000);
  });
});
