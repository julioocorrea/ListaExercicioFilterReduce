//Fácil:
//Escreva uma função que receba um array de números e retorne um novo array apenas com os números pares usando filter.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = filtrarNumerosPares(numeros);

console.log("Números pares:", numerosPares);

function filtrarNumerosPares(array) {
    return array.filter(numero => numero % 2 == 0);
}


//Crie uma função que receba um array de strings e retorne um novo array apenas com as strings que têm mais de três caracteres usando filter.
const strings = ["banana", "maçã", "laranja", "uva", "pera"];

const stringsMaisDeTresCaracteres = filtrarStringsMaisDeTresCaracteres(strings);

console.log("Strings com mais de três caracteres:", stringsMaisDeTresCaracteres);

function filtrarStringsMaisDeTresCaracteres(array) {
    return array.filter(string => string.length > 3);
}