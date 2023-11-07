const Drink = require("../main/drink");
const {
  CashPayment,
  CardPayment,
  ACCEDPTED_WON,
} = require("../main/paymentMethods");
const VendingMachine = require("../main/vendingMaching");

describe("Vending Machine", () => {
  const cola = new Drink("cola", 1100);
  const water = new Drink("water", 600);
  const coffee = new Drink("coffee", 700);
  const FREE_PRICE = 0;
  let vendingMachine = new VendingMachine([CashPayment, CardPayment], {
    cola,
    water,
    coffee,
  });

  describe("결제 수단 테스트", () => {
    describe("현금 결제", () => {
      it.each(ACCEDPTED_WON)("%p원 결제 성공", (won) => {
        expect(vendingMachine.verifyPaymentMethod(new CashPayment(won))).toBe(
          true
        );
      });
      it("실패", () => {
        expect(vendingMachine.verifyPaymentMethod(new CashPayment(20))).toBe(
          false
        );
      });
    });

    describe("카드 결제", () => {
      it("성공", () => {
        expect(vendingMachine.verifyPaymentMethod(new CardPayment())).toBe(
          true
        );
      });
    });
  });

  describe("구매 가능 품목 테스트", () => {
    it.each(["cola", "water", "coffee"])("%p 구매 요청 성공", (drink) => {
      expect(vendingMachine.isOnSaleList(drink)).toBe(true);
    });

    it("실패", () => {
      expect(vendingMachine.isOnSaleList("test")).toBe(false);
    });
  });

  describe("구매 요청 테스트", () => {
    it("성공", () => {
      const result = vendingMachine.product(new CardPayment(), "cola");
      console.log("result = ", result);
    });
  });
});
