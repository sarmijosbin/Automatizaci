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
            await browser.pause(2000);
            //await this.continueButton.click();

        }else {
            throw new Error('Confirmation message not displayed');

        }
    }

    async verifyAccountCreated() {
        if (await this.accountCreatedConfirmation.isDisplayed()) {
            await browser.pause(2000);
           // await this.continueButton.click();

        }else {
            throw new Error('Confirmation message not displayed');

        }
    }
    async verifyCartShop(){
        if (await this.CartShopConfirmation.isDisplayed()) {
            await browser.pause(2000);
            //await this.continueButton.click();

        }else {
            throw new Error('Confirmation message not displayed');
        }
    }

    async verifyLoggedUsrConfirmation(){
        if (await this.LoggedUsrConfirmation.isDisplayed()) {
            await browser.pause(2000);
            //await this.continueButton.click();

        }else {
            throw new Error('Confirmation message not displayed');
        }
    }
    
    async verifyaddressDetailsConfirmation(){
        if (await this.addressDetailsConfirmation.isDisplayed()) {
            await browser.pause(2000);
            //await this.continueButton.click();

        }else {
            throw new Error('Confirmation message not displayed');
        }
    }

    async verifyReviewOrderConfirmation(){
        if (await this.reviewDetailsConfirmation.isDisplayed()) {
            await browser.pause(2000);
            //await this.continueButton.click();

        }else {
            throw new Error('Confirmation message not displayed');
        }
    }

    async verifyCongratulationsOrderConfirmation(){
        if (await this.congratulationsOrderConfirmation.isDisplayed()) {
            await browser.pause(2000);
            //await this.continueButton.click();

        }else {
            throw new Error('Confirmation message not displayed');
        }
    }

    async verifyDeletedOrderConfirmation(){
        if (await this.deletedOrderConfirmation.isDisplayed()) {
            await browser.pause(2000);
            //await this.continueButton.click();

        }else {
            throw new Error('Confirmation message not displayed');
        }
    }
}
export default new verifyPage();  