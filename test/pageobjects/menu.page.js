import { $ } from '@wdio/globals'
import { buyCartSelectors, dressSelectors, home, kidsCategorySelectors, menCategorySelectors, menuConstants, quantitySelectors, tshirtSelectors,} from '../../constants/menu.constants';
import { generateProductQuantity } from './randomGenerator.page';
// import randomGenerator from './randomGenerator.page.js';
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
    //===== SUBCATEGORÍAS DE HOMBRES =====

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
    get buttonCart() {
        return $(buyCartSelectors.cartButton);
    }
     // ===== MÉTODOS =====

    async navigateMen() {
        await this.selectCategoryMen.click();
    }

    async selectProductMen() {
        // Navegar: Tshirts → Producto específico
        await this.selectTshirtMen.click();
        await this.tshirtSelectorsProduct.click();
    }

    async navigateKids() {
        // Abrir Kids y seleccionar subcategoría
        await this.selectCategoryKids.click();
        await this.selectDressKids.click();          // O selectTopsKids
        await this.dressSelectorsProduct.click();
        await this.buttonAddToCart.click();
        await this.buttonContinueShopping.click();
        await this.homePage.click();
    }
   
    // ===== FUNCION ALEATORIA =====

    //generateRandomNumber(min,max) {
    //    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    //    console.log(`Número aleatorio generado entre ${min} y ${max}: ${number}`);
    //    return number;   
    //}
    //====== METODOS ============
    
    async selectProductsRandom() {
        // const quantityRandom = randomGenerator.generateProductQuantity();
        const quantityRandom = generateProductQuantity()
        console.log(`Cantidad aleatoria generada: ${quantityRandom}`);

        // Ingresa el campo de cantidad
        await this.quantityInput.clearValue(); // Limpia el campo de cantidad
        await this.quantityInput.setValue(quantityRandom); // Establece el valor aleatorio
        console.log(`Cantidad establecida en el campo: ${quantityRandom}`);

        // Haz clic en el botón "Add to cart"
        await this.buttonAddToCart.click();
        await this.buttonContinueShopping.click();
        await browser.pause(1000);

            if (quantityRandom <= 3) {
                console.log(`Cantidad ${quantityRandom} <= 3, navegando a categoría Kids`);
                await this.navigateKids();
            } else {
                console.log(`Cantidad ${quantityRandom} > 3, no se navega a Kids`);
                await this.homePage.click();
            }
            return quantityRandom;
    }   
    async navigateCart() {
        await this.buttonCart.click();
        await browser.pause(1000); 
    }

    // Método para generar correo usando la misma utilidad
    //generarCorreoAleatorio() {
    //const numeroAleatorio = this.generateRandomNumber(300, 400);
    //const correo = `pruebaAtpbi${numeroAleatorio}@prueba.com`;
    //console.log(`Correo generado: ${correo}`);
    //return correo;
    //}
    // generateRandomEmail() {
    //     // Usar función de utilidad con parámetros por defecto (300-400)
    //     return randomGenerator.generateRandomEmail(); // Era: generarCorreoAleatorio()
    // }

    // generateRegistrationEmail() {
    //     return randomGenerator.generateRegistrationEmail(); // Para registro (100-120)
    // }
}

export default new MenuPage();  