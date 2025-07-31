import { $ } from '@wdio/globals'
import { checkoutSelectors, proceedCheckout,registerLogin} from '../../constants/checkout.constants.js';
import verifyPage from './verify.page.js';
import { generateRandomEmail } from './randomGenerator.page.js';

class checkoutPage {

        get proceedCheckoutBtn () {
                return $(proceedCheckout.btnProceedCheckout);
        }
         get registerLoginLink () {
                return $(registerLogin.registerLink);
        }
        get usernameLogin () {
                return $(registerLogin.usernameInput);
        }
        get emailaddressLogin () {
                return $(registerLogin.emailaddressInput);
        }
        get signupLogin () {
                return $(registerLogin.btnSignupLogin);
        }

        // ===== FORMULARIO DE REGISTRO =====
        //get opcionTitleMethod () {
        //return $(checkoutSelectors.opcionTitle)
        //}    
        get passwordInputMethod () {
                return $(checkoutSelectors.passwordInput);
        }
        get dayBirthMethod () {
                return $(checkoutSelectors.dayBirth);
        }
        get dayBirthOptionMethod () {
                return $(checkoutSelectors.dayBirthOption);
        }
        get monthBirthMethod () {
                return $(checkoutSelectors.monthBirth);
        }
        get monthBirthOptionMethod () {
                return $(checkoutSelectors.monthBirthOption);
        }
        get yearBirthMethod () {
                return $(checkoutSelectors.yearBirth);
        }
        get yearBirthOptionMethod () {
                return $(checkoutSelectors.yearBirthOption);
        } 
        get firstNameInputMethod () {
                return $(checkoutSelectors.firstNameInput);
        }
        get lastNameInputMethod () {
                return $(checkoutSelectors.lastNameInput);
        }
        get CompanyInputMethod () {
                return $(checkoutSelectors.CompanyInput);
        }
        get addressInputMethod () {
                return $(checkoutSelectors.addressInput);
        }
        get countryMethod () {
                return $(checkoutSelectors.country);
        }               
        get countryOptionMethod () {
                return $(checkoutSelectors.countryOption);
        }
        get stateMethod () {
                return $(checkoutSelectors.state);
        }
        get cityMethod () {
                return $(checkoutSelectors.city);
        }
        get zipcodeMethod () {
                return $(checkoutSelectors.zipcode);    
        }
        get mobileNumberMethod () {
                return $(checkoutSelectors.mobileNumber);
        }   
        get createAccountBtnMethod () {
                return $(checkoutSelectors.createAccountBtn);
        }
        get continueBtnMethod () {     
                return $(checkoutSelectors.continueBtn);
        }       

        async proceedCheckoutFlow() {
                await this.proceedCheckoutBtn.click();
                await browser.pause(1000); 
                await this.registerLoginLink.click();
                await browser.pause(1000);
        
                // Usar la utilidad compartida para generar correo
                const emailRandom = generateRandomEmail();

                await this.usernameLogin.setValue('Sindy Armijos');
                await this.emailaddressLogin.setValue(emailRandom);
                await this.signupLogin.click();
                await browser.pause(2000);

                return { user: 'Sindy Armijos', email: emailRandom };
        }

        async fillCheckoutForm() {
                try {
                        await this.passwordInputMethod.setValue('123456');
                        await this.dayBirthMethod.click();
                        await this.dayBirthOptionMethod.click();
                        await this.monthBirthMethod.click();
                        await this.monthBirthOptionMethod.click();
                        await this.yearBirthMethod.click();
                        await this.yearBirthOptionMethod.click();   
                        await this.firstNameInputMethod.setValue('Roberto');
                        await this.lastNameInputMethod.setValue('Ramirez');
                        await this.CompanyInputMethod.setValue('Roberto Company');
                        await this.addressInputMethod.setValue('Calle Falsa 123');
                        await this.countryMethod.click();
                        await this.countryMethod.selectByVisibleText('United States'); // Cambia a tu país deseado

                        await this.stateMethod.setValue('Estado Falso');
                        await this.cityMethod.setValue('Ciudad Falsa');
                        await this.zipcodeMethod.setValue('12345');
                        await this.mobileNumberMethod.setValue('1234567890');
                        await this.createAccountBtnMethod.click();
                        
                        // Verifica que el mensaje de confirmación se muestre: Cuenta creada
                        await verifyPage.verifyAccountCreated();
                        await this.continueBtnMethod.click();

                        // Verifica que el mensaje de confirmación se muestre: Usuario logueado
                        await verifyPage.verifyLoggedUsrConfirmation();

                } catch (error) {
                        console.log(`Error en paso específico: ${error.message}`);
                        throw error;
                                }
        }
}
export default new checkoutPage();  