/*
    ===== Código de TypeScript =====
*/

interface SuperHero { 
    name: string;
    age: number;
    address: Address;
    // 1. La interfaz SOLO define que la función existe y qué tipo de dato devuelve.
    showAddress: () => string; 
}
interface Address{
    Street: string;
    country: string;
    city: string;

}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        Street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    // 2. El objeto real es el que contiene la lógica y las llaves {}
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const address = superHeroe.showAddress();
console.log( address );

export {};