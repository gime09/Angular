function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${ a + b }`;
}

function multiply( firstNumber: number, base: number = 2, secondNumber?: number ) {
    return firstNumber * base;
}

// Ejecuciones agrupadas (declarando result una sola vez)
// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);

//console.log({ result, result2, multiplyResult });


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number ) => {
    character.hp += amount;
} 

// 1. Creamos al personaje respetando las reglas de la interfaz
const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida de ${this.name}: ${this.hp}`);
    }
}

// 2. Usamos la función para curarlo (le sumamos 10 de hp)
healCharacter(strider, 10);
healCharacter(strider, 50);

// 3. Ejecutamos su función para ver el resultado en la consola
strider.showHp(); 

export {};