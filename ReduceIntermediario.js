//Intermediário:
//Implemente uma função que receba um array de objetos e retorne a soma de uma propriedade específica de todos os objetos usando reduce.
const arrayDeObjetos = [
    { nome: 'Produto 1', preco: 10 },
    { nome: 'Produto 2', preco: 20 },
    { nome: 'Produto 3', preco: 30 }
];

const somaPrecos = somarPropriedade(arrayDeObjetos, 'preco');

console.log(somaPrecos);

function somarPropriedade(arrayDeObjetos, propriedade) {
    return arrayDeObjetos.reduce(function(acumulador, objeto) {
        return acumulador + objeto[propriedade];
    }, 0);
}

//Escreva uma função que receba um array de números e retorne o produto de todos os elementos usando reduce.

const numeros = [1, 2, 3, 4, 5];

const produto = produtoElementos(numeros);

console.log(produto);

function produtoElementos(arrayDeNumeros) {
    return arrayDeNumeros.reduce(function(acumulador, numero) {
        return acumulador * numero;
    }, 1);
}