const numeros = new Array(15, 13, 16, 22, 35, 87, 64, 19)
const nomes = new Array("Victor", "Lucas", "Rafael")
const data = new Date("2022-11-09")
function dataComNumeros(){
    let juntos = numeros.concat(nomes)
    console.log(numeros.sort(function (a,b) { return a-b }))
    console.log(juntos)
    juntos.splice(3, 0, "Cachorro", "Gato")
    console.log(juntos)
    console.log(data)
    console.log(data.getFullYear())
}

let html = ""
numeros.forEach(function(valor, indice, array){
    html += valor + " posicao |" + indice + " | "
})
console.log(html)
