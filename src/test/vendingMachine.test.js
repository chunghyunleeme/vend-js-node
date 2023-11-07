const Drink = require("../main/drink");
const {
  CashPayment,
  CardPayment,
  ACCEDPTED_WON,
} = require("../main/paymentMethods");
const VendingMachine = require("../main/vendingMaching");

describe("Vending Machine", () => {
  const cola = new Drink("콜라", 1100);
  const water = new Drink("물", 600);
  const coffee = new Drink("커피", 700);
  let vendingMachine = new VendingMachine(
    [CashPayment, CardPayment],
    [cola, water, coffee]
  );

  describe("결제 수단 테스트", () => {
    describe("현금 결제", () => {
      it.each(ACCEDPTED_WON)("%p원 결제 성공", (won) => {
        console.log("won = ", won);
        expect(vendingMachine.verifyPayment(new CashPayment(won))).toBe(true);
      });
      it("실패", () => {
        expect(vendingMachine.verifyPayment(new CashPayment(20))).toBe(false);
      });
    });

    describe("카드 결제", () => {
      it("성공", () => {
        expect(vendingMachine.verifyPayment(new CardPayment())).toBe(true);
      });
    });
  });
});
