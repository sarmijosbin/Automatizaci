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
            await browser.pause(2000); // Pausa para esperar que la página cargue
            // Verificar que la página de eliminación de cuenta se haya abierto
            await verifyPage.verifyDeletedOrderConfirmation();
            await browser.saveScreenshot('./screenshots/delete-account.png');
            

            // Confirmar la eliminación de la cuenta
            await this.confirmDeleteButton.click();
            await browser.pause(2000); // Pausa para esperar que la acción se complete
        }
}
export default new deleteAccountPage();  