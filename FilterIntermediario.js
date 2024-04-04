//Intermediário:
//Implemente uma função que receba um array de objetos e retorne um novo array apenas com os objetos que têm uma propriedade específica definida, usando filter.

const objetos = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro' }
];

const objetosComIdade = filtrarObjetosComPropriedade(objetos, 'idade');

console.log(objetosComIdade);

function filtrarObjetosComPropriedade(array, propriedade) {
    return array.filter(objeto => propriedade in objeto);
}

//Escreva uma função que receba um array de números e retorne um novo array apenas com os números que são múltiplos de 3 usando filter.
const numeros = [1, 3, 5, 9, 12, 15, 20];

const multiplosDeTres = filtrarMultiplosDeTres(numeros);

console.log(multiplosDeTres);

function filtrarMultiplosDeTres(numeros) {
    return numeros.filter(numero => numero % 3 === 0);
}