const { validatePrice, calculateDiscount, Cart } = require("../src/shop");

// === ЧАСТИНА 1: 3 Модульних тести (Unit Tests) ===
describe("Unit Tests for Shop functions", () => {
  test("validatePrice має повернути true для коректної ціни", () => {
    expect(validatePrice(100)).toBe(true);
  });

  test("validatePrice має повернути false для від'ємної ціни", () => {
    expect(validatePrice(-50)).toBe(false);
  });

  test("calculateDiscount має правильно рахувати знижку 20%", () => {
    // 100 - 20% = 80
    expect(calculateDiscount(100, 20)).toBe(80);
  });
});

// === ЧАСТИНА 2: 2 Інтеграційних тести (Integration Tests) ===
describe("Integration Tests for Cart", () => {
  test("Cart.addItem має використовувати validatePrice та додавати товар", () => {
    const cart = new Cart();
    // Додаємо валідний товар
    const result = cart.addItem("Laptop", 1000);

    expect(result).toBe(true);
    expect(cart.items.length).toBe(1);
  });

  test("Cart має ігнорувати товар з некоректною ціною (інтеграція з валідацією)", () => {
    const cart = new Cart();
    // Спроба додати товар з ціною -100
    const result = cart.addItem("Bad Item", -100);

    expect(result).toBe(false);
    expect(cart.items.length).toBe(0); // Масив має залишитись пустим
  });
});
