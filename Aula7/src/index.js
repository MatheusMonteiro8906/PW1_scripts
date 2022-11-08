var frutas = []

function abasteceVetorOrganizado(fruta){ 
frutas.push(fruta)
frutas.push('abacate')
 frutas.sort()
 return frutas.join(" | ")
}

console.log(abasteceVetorOrganizado('frutas'));