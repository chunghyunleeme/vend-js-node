class VendingMachine {
  constructor(acceptedPaymentMethods, availableDrinks) {
    this.acceptedPaymentMethods = acceptedPaymentMethods;
    this.availableDrinks = availableDrinks;
  }

  verifyPayment(payment) {
    return payment.isValid();
  }

  availableDrink(drink) {
    const drinkNames = this.availableDrinks.map((d) => d.name);
    return drinkNames.includes(drink);
  }
}

module.exports = VendingMachine;
