import { $ } from '@wdio/globals'
import { buyCartSelectors, dressSelectors, home, kidsCategorySelectors, menCategorySelectors, menuConstants, quantitySelectors, tshirtSelectors,} from '../../constants/menu.constants';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class MenuPage {
    /**
    ===== CATEGORIAS PRINCIPALES =====
     */
    get selectCategoryMen () {
        return $(menuConstants.category.men);
    }
    get selectCategoryKids () {
        return $(menuConstants.category.kids);
    }
// ===== SUBCATEGORÍAS DE HOMBRES =====
    get selectTshirtMen() {
        return $(menCategorySelectors.tshirts);
    }
    get tshirtSelectorsProduct() {
        return $(tshirtSelectors.tshirtPolo); 
    }  
    get selectJeansMen() {
        return $(menCategorySelectors.jeans);
    }

    // ===== SUBCATEGORÍAS DE KIDS =====
    get selectDressKids() {
        return $(kidsCategorySelectors.dress);
    }
    get selectTopsKids() {
        return $(kidsCategorySelectors.topsShirts);
    }
    get dressSelectorsProduct() {
    return $(dressSelectors.dressProduct); 
    }  

    get quantityInput() {
        return $(quantitySelectors.quantityInput);
    }
    get buttonAddToCart() {
        return $(quantitySelectors.buttonAddToCart);
    }
    get buttonContinueShopping() {
        return $(quantitySelectors.continueShopping);   
    }
    get homePage() {
        return $(home.homePage);
    }
    get cartButton() {
        return $(buyCartSelectors.cartButton);
    }
     // ===== MÉTODOS =====

    async navigateMen() {
        await this.selectCategoryMen.click();
        await browser.pause(2000); 
        //await this.selectTshirtMen.click();
        //await browser.pause(2000); 
     }
     async selectProductMen() {
        // Navegar: Tshirts → Producto específico
        await this.selectTshirtMen.click();
        await browser.pause(2000);
        await this.tshirtSelectorsProduct.click();
        await browser.pause(2000); 
     }

    async navigateKids() {
        // Abrir Kids y seleccionar subcategoría
        await this.selectCategoryKids.click();
        await browser.pause(2000); 
        await this.selectDressKids.click();          // O selectTopsKids
        await browser.pause(2000);
        await this.dressSelectorsProduct.click();
        await browser.pause(2000);
        await this.buttonAddToCart.click();
        await browser.pause(2000);
        await this.buttonContinueShopping.click();
        await browser.pause(2000);
        await this.homePage.click();
        await browser.pause(2000);
    }
        //await browser.saveScreenshot('./screenshots/primerProducto.png');
   

    // ===== FUNCION ALEATORIA =====

    generateRandomNumber(min,max) {
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Número aleatorio generado entre ${min} y ${max}: ${numero}`);
    return numero;   
    }
    //====== METODOS ============
    
    async processRandomQuantity() {
    const cantidadAleatoria = this.generateRandomNumber(1, 5);
    console.log(`Cantidad aleatoria generada: ${cantidadAleatoria}`);


    // Ingresa el campo de cantidad
    await this.quantityInput.clearValue(); // Limpia el campo de cantidad
    await this.quantityInput.setValue(cantidadAleatoria); // Establece el valor aleatorio
    console.log(`Cantidad establecida en el campo: ${cantidadAleatoria}`);
    await browser.pause(2000);

    // Haz clic en el botón "Add to cart"
    await this.buttonAddToCart.click();
    await browser.pause(2000);
    await this.buttonContinueShopping.click();
    await browser.pause(2000);

    if (cantidadAleatoria <= 3) {
        console.log(`Cantidad ${cantidadAleatoria} <= 3, navegando a categoría Kids`);
        await this.navigateKids();
    } else {
        console.log(`Cantidad ${cantidadAleatoria} > 3, no se navega a Kids`);
        await this.homePage.click();
        await browser.pause(2000);
    }
     return cantidadAleatoria;
    }   
    async navigateCart() {
        await this.cartButton.click();
        await browser.pause(2000); // Pausa para esperar que la página cargue
    }

    // Método para generar correo usando la misma utilidad
    generarCorreoAleatorio() {
    // Usar la misma función para el correo (300-320)
    const numeroAleatorio = this.generateRandomNumber(300, 400);
    const correo = `pruebaAtpbi${numeroAleatorio}@prueba.com`;
    console.log(`Correo generado: ${correo}`);
    return correo;
    }
}

export default new MenuPage();  