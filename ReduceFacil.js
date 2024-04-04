//Fácil:
//Escreva uma função que receba um array de números e retorne a soma de todos os elementos usando reduce.
const numeros = [1, 2, 3, 4, 5];

const soma = somarElementos(numeros);

console.log(soma);

function somarElementos(array) {
    return array.reduce(function(acumulador, elemento){
        return acumulador + elemento
    }, 0);
}

//Crie uma função que receba um array de strings e retorne uma única string concatenando todos os elementos usando reduce.
const strings = ['Olá, ', 'como ', 'vai ', 'você?'];

const concatenacao = concatenarStrings(strings);

console.log(concatenacao);

function concatenarStrings(array) {
    return array.reduce(function(acumulador, elemento){
        return acumulador + elemento
    }, '');
}