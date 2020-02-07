import romanToDecimal from "../converters/romanToDecimal";

describe("Test the roman numeral value between I-X", () => {
  it("should return equvelant decimal value", () => {
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

describe("Test the roman numeral value between XX-MMM", () => {
  it("should return equvelant decimal value", () => {
    expect(romanToDecimal("XX")).toBe(20);
    expect(romanToDecimal("XXX")).toBe(30);
    expect(romanToDecimal("XL")).toBe(40);
    expect(romanToDecimal("L")).toBe(50);
    expect(romanToDecimal("LX")).toBe(60);
    expect(romanToDecimal("LXX")).toBe(70);
    expect(romanToDecimal("LXXX")).toBe(80);
    expect(romanToDecimal("XC")).toBe(90);
    expect(romanToDecimal("C")).toBe(100);
    expect(romanToDecimal("CC")).toBe(200);
    expect(romanToDecimal("CCC")).toBe(300);
    expect(romanToDecimal("CD")).toBe(400);
    expect(romanToDecimal("D")).toBe(500);
    expect(romanToDecimal("DC")).toBe(600);
    expect(romanToDecimal("DCC")).toBe(700);
    expect(romanToDecimal("DCCC")).toBe(800);
    expect(romanToDecimal("CM")).toBe(900);
    expect(romanToDecimal("M")).toBe(1000);
    expect(romanToDecimal("MM")).toBe(2000);
    expect(romanToDecimal("MMM")).toBe(3000);
  });
});
