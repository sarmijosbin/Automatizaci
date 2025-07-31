import { $ } from '@wdio/globals'
import { deleteAccountSelectors } from '../../constants/deleteAccount.constants.js';
import verifyPage from './verify.page.js';

class deleteAccountPage {

    get buttonDeleteAccount () {     
        return $(deleteAccountSelectors.deleteAccountButton);
    } 
    get confirmDeleteButton () {
        return $(deleteAccountSelectors.confirmDeleteButton);
    } 

    async deleteAccount() {
        // Clic en el botón de eliminar cuenta
        await this.buttonDeleteAccount.click();
        await browser.pause(1000);

        // Verificar que la página de eliminación de cuenta se haya abierto
        await verifyPage.verifyDeletedOrderConfirmation();
         
        // Confirmar la eliminación de la cuenta
        await this.confirmDeleteButton.click();
    }
}
export default new deleteAccountPage();  