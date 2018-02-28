import { sum, product, modulo } from "./math";

describe("Sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("Product", () => {
  test("multiplies 3 by 4 to equal 12", () => {
    expect(product(3, 4)).toBe(12);
  });
});

describe("Modulo", () => {
  test("finds the remainder of 17 divided by 4 to be 1", () => {
    expect(modulo(17, 4)).toBe(1);
  });
});
