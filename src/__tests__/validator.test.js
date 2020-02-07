import check_validator from "../helpers/validator";

describe(" Test valid roman numeral value", () => {
  it("should check valid roman numeral", () => {
    expect(check_validator("V")).toBe(true);
    expect(check_validator("I")).toBe(true);
    expect(check_validator("II")).toBe(true);
    expect(check_validator("L")).toBe(true);
    expect(check_validator("D")).toBe(true);
    expect(check_validator("C")).toBe(true);
    expect(check_validator("IV")).toBe(true);
    expect(check_validator("VI")).toBe(true);
    expect(check_validator("X")).toBe(true);
    expect(check_validator("XX")).toBe(true);
    expect(check_validator("CC")).toBe(true);
    expect(check_validator("MMM")).toBe(true);
    expect(check_validator("XXX")).toBe(true);
    expect(check_validator("III")).toBe(true);
  });
});

describe(" Test valid decimal values", () => {
  it("should check valid decimal numbers", () => {
    expect(check_validator("1")).toBe(true);
    expect(check_validator("2")).toBe(true);
    expect(check_validator("3")).toBe(true);
    expect(check_validator("4")).toBe(true);
    expect(check_validator("5")).toBe(true);
    expect(check_validator("6")).toBe(true);
    expect(check_validator("7")).toBe(true);
    expect(check_validator("8")).toBe(true);
    expect(check_validator("9")).toBe(true);
  });
});

describe(" Test invalid roman numeral value", () => {
  it("should check invalid roman numeral", () => {
    expect(check_validator("IIV")).toBe(false);
    expect(check_validator("IIII")).toBe(false);
    expect(check_validator("XXC")).toBe(false);
    expect(check_validator("XXXX")).toBe(false);
    expect(check_validator("MMMMM")).toBe(false);
    expect(check_validator("DD")).toBe(false);
    expect(check_validator("LL")).toBe(false);
    expect(check_validator("VV")).toBe(false);
    expect(check_validator("CCCC")).toBe(false);
  });
});
