// --- Функції для Модульного тестування ---

function validatePrice(price) {
  // Перевіряє, чи ціна є числом і чи вона не від'ємна
  if (typeof price !== "number") return false;
  if (price < 0) return false;
  return true;
}

function calculateDiscount(price, discountPercent) {
  // Рахує ціну зі знижкою
  if (!validatePrice(price)) throw new Error("Некоректна ціна");
  return price - (price * discountPercent) / 100;
}

// --- Клас для Інтеграційного тестування ---

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price) {
    // Інтеграція: цей метод використовує функцію validatePrice
    if (validatePrice(price)) {
      this.items.push({ name, price });
      return true;
    }
    return false;
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

module.exports = { validatePrice, calculateDiscount, Cart };
