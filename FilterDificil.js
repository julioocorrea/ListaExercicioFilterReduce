//Difícil:
//Crie uma função que receba uma matriz (array de arrays) e retorne um novo array apenas com as linhas que têm a soma dos elementos maior que 10, usando filter.
const matriz = [
    [1, 2, 3, 4],
    [5, 6, 7],
    [0, 9],
    [10, 11, 12, 13]
];

const linhasComSomaMaiorQueDez = filtrarLinhasComSomaMaiorQueDez(matriz);

console.log(linhasComSomaMaiorQueDez);

function filtrarLinhasComSomaMaiorQueDez(matriz) {
    return matriz.filter(linha => {
        let soma = 0;
        for (let i = 0; i < linha.length; i++) {
            soma += linha[i];
        }
        return soma > 10;
    });
}

//Implemente uma função que receba um array de strings e retorne um novo array apenas com as strings que começam com uma letra maiúscula, usando filter.
const strings = ['JavaScript', 'html', 'cSS', 'Python', 'Node.js'];

const stringsComLetraMaiuscula = filtrarStringsComLetraMaiuscula(strings);

console.log(stringsComLetraMaiuscula);

function filtrarStringsComLetraMaiuscula(strings) {
    return strings.filter(string => {
        const primeiraLetra = string.charAt(0);
        return primeiraLetra === primeiraLetra.toUpperCase();
    });
}