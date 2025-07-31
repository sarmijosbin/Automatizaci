import { $ } from '@wdio/globals'
import { verifyAccountCreatedSelectors, verifyAddressSelectors, verifyCartSelectors, verifyCongratulationsOrderSelectors, verifyDeletedAccountSelectors, verifyHomeSelectors, verifyLoggedSelectors, verifyReviewOrderSelectors,  } from '../../constants/verifySelector.constants.js'

class verifyPage {

    get homeConfirmationMessage() {
        return $(verifyHomeSelectors.mainLogo);
    }

    get accountCreatedConfirmation() {
        return $(verifyAccountCreatedSelectors.accountCreatedConfirmation);
    }

    get CartShopConfirmation() {
        return $(verifyCartSelectors.cartConfirmationMessage);
    }

    get LoggedUsrConfirmation() {
        return $(verifyLoggedSelectors.loggedUsrConfirmation);
    }

    get addressDetailsConfirmation() {
        return $(verifyAddressSelectors.addressDetailsConfirmation);
    }

    get reviewDetailsConfirmation() {
        return $(verifyReviewOrderSelectors.reviewOrderConfirmation);
    }

    get congratulationsOrderConfirmation() {
        return $(verifyCongratulationsOrderSelectors.congratulationsOrderMessage);
    }

    get deletedOrderConfirmation() {
        return $(verifyDeletedAccountSelectors.deletedAccountMessage);
    }

    async verifyHomePage() {
        if (await this.homeConfirmationMessage.isDisplayed()) {
            await browser.saveScreenshot('./screenshots/home-page.png');

        }else {
            throw new Error('Confirmation message not displayed');

        }
    }

    async verifyAccountCreated() {
        if (await this.accountCreatedConfirmation.isDisplayed()) {
            await browser.saveScreenshot('./screenshots/account-created.png');

        }else {
            throw new Error('Confirmation message not displayed');

        }
    }
    async verifyCartShop(){
        if (await this.CartShopConfirmation.isDisplayed()) {
            await browser.saveScreenshot('./screenshots/cart-shop.png');

        }else {
            throw new Error('Confirmation message not displayed');
        }
    }

    async verifyLoggedUsrConfirmation(){
        if (await this.LoggedUsrConfirmation.isDisplayed()) {
            await browser.saveScreenshot('./screenshots/logged-user.png');

        }else {
            throw new Error('Confirmation message not displayed');
        }
    }
    
    async verifyaddressDetailsConfirmation(){
        if (await this.addressDetailsConfirmation.isDisplayed()) {
            await browser.saveScreenshot('./screenshots/address-details.png');

        }else {
            throw new Error('Confirmation message not displayed');
        }
    }

    async verifyReviewOrderConfirmation(){
        if (await this.reviewDetailsConfirmation.isDisplayed()) {
            await browser.saveScreenshot('./screenshots/review-order.png');

        }else {
            throw new Error('Confirmation message not displayed');
        }
    }

    async verifyCongratulationsOrderConfirmation(){
        if (await this.congratulationsOrderConfirmation.isDisplayed()) {
            await browser.saveScreenshot('./screenshots/congratulations-order.png');

        }else {
            throw new Error('Confirmation message not displayed');
        }
    }

    async verifyDeletedOrderConfirmation(){
        if (await this.deletedOrderConfirmation.isDisplayed()) {
            await browser.saveScreenshot('./screenshots/deleted-account.png');

        }else {
            throw new Error('Confirmation message not displayed');
        }
    }
}
export default new verifyPage();  