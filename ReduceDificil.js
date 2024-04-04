//Difícil:
//Crie uma função que receba uma matriz (array de arrays) e retorne um único valor com a soma de todos os elementos da matriz, usando reduce.
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const somaMatriz = somarElementosMatriz(matriz);

console.log(somaMatriz);

function somarElementosMatriz(matriz) {
    return matriz.reduce((acumuladorExterno, linha) => {
        return acumuladorExterno + linha.reduce((acumuladorInterno, elemento) => {
            return acumuladorInterno + elemento;
        }, 0);
    }, 0);
}


//Implemente uma função que receba um array de números e retorne o maior número usando reduce.
const numeros = [10, 5, 25, 8, 15];

const maiorNumero = encontrarMaiorNumero(numeros);

console.log(maiorNumero); 

function encontrarMaiorNumero(arrayDeNumeros) {
    return arrayDeNumeros.reduce(function(maior, atual) {
        if (atual > maior) {
            return atual;
        } else {
            return maior;
        }
    }, arrayDeNumeros[0]);
}