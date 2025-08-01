import { $ } from '@wdio/globals'
//import menuPage from './menu.page.js';
import checkoutPage from './checkout.page.js';
import { placeOrderSelectors } from '../../constants/placeOrder.constants.js';
import verifyPage from './verify.page.js';
import menuPage from './menu.page.js';

class placeOrderPage {

    get buttonPlaceOrder () {     
        return $(placeOrderSelectors.btnPlaceOrder);
    } 
    get inputNameCard() {
        return $(placeOrderSelectors.nameCardInput);
    }
    get inputCardNumber() {
        return $(placeOrderSelectors.cardNumberInput);
    }
    get inputCvc() {
        return $(placeOrderSelectors.cvcInput);
    }
    get inputExpiryMonth() {
        return $(placeOrderSelectors.expiryMonthInput);
    }
    get inputExpiryYear() {
        return $(placeOrderSelectors.expiryYearInput);
    }   
    get buttonPayAndConfirmOrder() {
        return $(placeOrderSelectors.payAndConfirmOrderBtn);
    }   
    get buttonDeleteAccount() {
        return $(deleteAccountSelectors.deleteAccountButton);
    }

    async placeOrderCart() {
        // Navegar al carrito de compras
        await menuPage.buttonCart.click();
        // Verificar que la página del carrito se cargue
        await verifyPage.verifyCartShop();
        await browser.pause(1000);

        // Proceder al checkout
        await checkoutPage.proceedCheckoutBtn.click();
        await browser.pause(1000); // Pausa para esperar que la página cargue

        // Verificar que los detalles de la dirección sean correctos
        await verifyPage.verifyaddressDetailsConfirmation();
        await verifyPage.verifyReviewOrderConfirmation();

        await this.buttonPlaceOrder.click();
        await this.inputNameCard.setValue('John Doe');
        await this.inputCardNumber.setValue('378282246310005');
        await this.inputCvc.setValue('123');
        await this.inputExpiryMonth.setValue('12');
        await this.inputExpiryYear.setValue('2027');
        await this.buttonPayAndConfirmOrder.click();
        await browser.pause(1000);

        // Verificar que la orden se haya realizado correctamente
        await verifyPage.verifyCongratulationsOrderConfirmation();

    }
}
export default new placeOrderPage();  