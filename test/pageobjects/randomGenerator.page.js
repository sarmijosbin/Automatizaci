
// /**
//  * Clase utilitaria para generar números y datos aleatorios
//  */
// class RandomGenerator {
//     /**
//      * Genera un número aleatorio entre un rango específico.
//      */
//     generateRandomNumber(min, max) {
//         const number = Math.floor(Math.random() * (max - min + 1)) + min;
//         console.log(`Número aleatorio generado entre ${min} y ${max}: ${number}`);
//         return number;   
//     }
//     /**
//      * Genera un correo electrónico aleatorio.
//      */
//     generateRandomEmail(minNum = 300, maxNum = 400) {
//     const numberRandom = this.generateRandomNumber(minNum, maxNum);
//     const email = `pruebaAtpbi${numberRandom}@prueba.com`;
//     console.log(`Correo generado: ${email}`);
//     return email;
//     }

//     generateProductQuantity() {
//         return this.generateRandomNumber(1, 5);
//     }

//     generateRegistrationEmail() {
//         return this.generateRandomEmail(300, 400);
//     }
// }

// export default new RandomGenerator;

export const generateRandomNumber = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Número aleatorio generado entre ${min} y ${max}: ${number}`);
    return number;
}

export const generateRandomEmail = (minNum = 300, maxNum = 400) => {
    const numberRandom = generateRandomNumber(minNum, maxNum);
    const email = `pruebaAtpbi${numberRandom}@prueba.com`;
    console.log(`Correo generado: ${email}`);
    return email;
}

export const generateProductQuantity = () => {
    return generateRandomNumber(1, 5);
}

export const generateRegistrationEmail = () => {
    return generateRandomEmail(300, 400);
}