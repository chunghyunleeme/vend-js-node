const { CashPayment } = require("./paymentMethods");

class VendingMachine {
  constructor(acceptedPaymentMethods, availableDrinks) {
    this.acceptedPaymentMethods = acceptedPaymentMethods;
    this.availableDrinks = availableDrinks;
  }

  /**
   * 판매중인 음료수인지 검증한다.
   * @param {구매할 음료수} drink
   * @returns 판매중인 음료수인지 여부
   */
  isOnSaleList(drink) {
    const selectedDrink = this.availableDrinks[drink];
    if (!selectedDrink) {
      return false;
    }
    return true;
  }

  /**
   * 유효한 결제 수단인지 겸증한다.
   * @param {결제 수단} payment
   * @returns 가능한 결제 수단인지 검증
   */
  verifyPaymentMethod(payment) {
    return payment.isValid();
  }

  isEnoughPayment(price, payAmount) {
    if (price < payAmount) {
      return true;
    }
    return false;
  }

  product(payment, drink) {
    this.isOnSaleList(drink);
    this.verifyPaymentMethod(payment);
    const selectedDrink = this.availableDrinks[drink];
    this.isEnoughPayment(selectedDrink.price, payment.value);
    return selectedDrink;
  }
}

module.exports = VendingMachine;
