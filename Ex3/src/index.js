/*
Monte um vetor de 6 lugares que irá sortear 6 números entre 1 e 60 aleatoriamente, com as seguintes condições:
1. Os 6 números não podem ser iguais.
2. Eles devem ser apresentados em ordem crescente.
3. Os 3 primeiros numeros devem estar na cas 0 ao 20 e do 21 ao 45
4. Os 3 ultimos devem estar na casa dos 46 ao 55 e o último 56 até 60.
*/

var numerosIniciais = []
var numerosFinais = []

function sortNumInicial(){
    numerosIniciais.push(Math.floor(Math.random() * 20));
    numerosIniciais.push(Math.floor(Math.random() * 20));
    numerosIniciais.push(Math.floor(Math.random() * (45 - 21 + 1) + 21));
}
function sortNumFinais(){
    numerosFinais.push(Math.floor(Math.random() * (55 - 46 + 1) + 46));
    numerosFinais.push(Math.floor(Math.random() * (55 - 46 + 1) + 46));
    numerosFinais.push(Math.floor(Math.random() * (60 - 56 + 1) + 56));
}

sortNumInicial()
sortNumFinais()

let numeros = numerosIniciais.concat(numerosFinais)
numeros.sort(function(a, b){return a-b});

console.log(numeros)
