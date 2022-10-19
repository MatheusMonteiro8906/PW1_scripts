function calculaH(ca, co){

    return Math.sqrt(Math.pow(ca, 2) + Math.pow(co, 2));
}

function calculaCA(co, h){
  
    return Math.sqrt(Math.pow(co, 2) - (Math.pow(h, 2)));

}

function calculaCO(h, ca){
  
    return Math.sqrt(Math.pow(ca, 2) - (Math.pow(h, 2)));

}

function calculaRegra(h, ca, co){
    if (h == 0)
    {
        return calculaH(ca, co);
    } 
    else if (ca == 0) 
    {
        return calculaCA(h, co);
    }
     else if (co == 0)
    {
        return  calculaCO(ca, h);
    } 
    else {
       console.log("Ocorreu um erro.")
    }
}

console.log(calculaRegra(0, 20, 21));
console.log(calculaRegra(13, 5, 0));
console.log(calculaRegra(10, 0, 6));






/*function calculaNumeros(x1, x2){
    if(x1 == "1"){
        if(x2 == "1"){
            return "C";
        } else {
            return "B";
        }

        }
        else 
        {
            return "A";
        }
   
}

function geraNumero(){
    return (Math.floor(Math.random() * 2));
}

console.log(calculaNumeros(geraNumero(), geraNumero() ) );*/