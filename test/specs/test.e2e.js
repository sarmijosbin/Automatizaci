import { browser, expect } from '@wdio/globals'
import principalPage from '../pageobjects/principal.page.js'
import menuPage from '../pageobjects/menu.page.js'
import checkoutPage from '../pageobjects/checkout.page.js' 
import placeOrderPage from '../pageobjects/placeOrder.page.js'
import deleteAccountPage from '../pageobjects/deleteAccount.page.js'
import verifyPage from '../pageobjects/verify.page.js'

describe('Navigation Tests', () => {
    it('should navigate to men and kids', async () => {
        // Verifica que la página principal se haya abierto correctamente
        await browser.saveScreenshot('./screenshots/test-start.png');

        await principalPage.open()
        await browser.maximizeWindow()
        await browser.pause(2000);

        await verifyPage.verifyHomePage();

        // Navega a la categoría de hombres y selecciona camisetas
        await menuPage.navigateMen(); 
        await browser.pause(3000);
        await menuPage.selectProductMen();
        await browser.pause(3000);

        // Ingresa una cantidad aleatoria de productos
        await browser.saveScreenshot('./screenshots/product-selected.png');

        const cantidadUsada = await menuPage.processRandomQuantity();
        console.log(`Cantidad procesada: ${cantidadUsada}`);
        await browser.pause(3000);
        
        // Navega en el carrito de compras
        await menuPage.navigateCart(); 
        await browser.pause(2000);

        //Procesar checkout con correo aleatorio
        const datosUsuario = await checkoutPage.proceedCheckoutFlow();
        console.log(`Usuario registrado: ${datosUsuario.usuario}`);
        console.log(`Correo usado: ${datosUsuario.correo}`);
        await browser.pause(2000);
        
        // Completa el formulario de checkout
        await checkoutPage.fillCheckoutForm();
        console.log('Formulario de checkout completado');  
        await browser.pause(2000);

        // Navega para realizar el pedido
        await placeOrderPage.placeOrderCart();
        await browser.pause(2000);
        // Elimina la cuenta del usuario
        await deleteAccountPage.deleteAccount();
        await browser.pause(2000);
    })
})
