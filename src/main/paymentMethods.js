const ACCEDPTED_WON = [100, 500, 1000, 5000, 10000, 50000];

class CashPayment {
  constructor(value) {
    this.value = value;
  }

  isValid() {
    return ACCEDPTED_WON.includes(this.value);
  }
}

class CardPayment {
  isValid() {
    return true;
  }
}

module.exports = { CashPayment, CardPayment, ACCEDPTED_WON };
