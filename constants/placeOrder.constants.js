export const placeOrderSelectors = {
    btnPlaceOrder: `//a[@href='/payment' and contains(text(),'Place Order')]`,
    nameCardInput: `//input[@data-qa='name-on-card']`,
    cardNumberInput: `//input[@data-qa='card-number']`,
    cvcInput: `//input[@data-qa='cvc']`,
    expiryMonthInput: `//input[@data-qa='expiry-month']`,
    expiryYearInput: `//input[@data-qa='expiry-year']`,
    payAndConfirmOrderBtn: `//button[@data-qa='pay-button']`,
}
