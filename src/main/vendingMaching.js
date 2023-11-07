class VendingMachine {
  constructor(acceptedPaymentMethods, availableDrinks) {
    this.acceptedPaymentMethods = acceptedPaymentMethods;
    this.availableDrinks = availableDrinks;
  }

  verifyPayment(payment) {
    return payment.isValid();
  }
}

module.exports = VendingMachine;
