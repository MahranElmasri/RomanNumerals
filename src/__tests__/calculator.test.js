import claculator from "../helpers/calculator";
const { add, sub, mul, div } = claculator;

describe("Test sum function", () => {
  it("should add two values", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(0, 3)).toBe(3);
    expect(add(-1, 3)).toBe(2);
    expect(add(-2, -3)).toBe(-5);
  });
});

describe("Test sub function", () => {
  it("should sub two values", () => {
    expect(sub(5, 3)).toBe(2);
    expect(sub(2, 3)).toBe(-1);
    expect(sub(0, 3)).toBe(-3);
    expect(sub(3, 0)).toBe(3);
  });
});

describe("Test mulitply function", () => {
  it("should mulitply two values", () => {
    expect(mul(5, 3)).toBe(15);
    expect(mul(5, 1)).toBe(5);
    expect(mul(5, 0)).toBe(0);
    expect(mul(5, -3)).toBe(-15);
  });
});

describe("Test divison function", () => {
  it("should div two values", () => {
    expect(div(15, 3)).toBe(5);
    expect(div(10, 0)).toBe(Infinity);
    expect(div(7, 1)).toBe(7);
  });
});
