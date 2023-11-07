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
    const selectedDrink = this.availableDrinks[drink];
    if (!this.isOnSaleList(drink)) {
      return new Result({
        status: FAIL,
        reason: "verify sale list error",
      });
    }
    if (!this.verifyPaymentMethod(payment)) {
      return new Result({
        status: FAIL,
        reason: "verify payment method error",
      });
    }
    if (!this.isEnoughPayment(selectedDrink.price, payment.value)) {
      return new Result({
        status: FAIL,
        reason: "verify enough money error",
      });
    }
    return new Result({
      status: SUCCESS,
      drink: selectedDrink,
    });
  }
}

SUCCESS = "success";
FAIL = "fail";
class Result {
  constructor(result) {
    this.result = result;
  }
}

module.exports = VendingMachine;
