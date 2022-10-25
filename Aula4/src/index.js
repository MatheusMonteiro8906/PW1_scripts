function calculaH(ca, co){

    return Math.sqrt(Math.pow(ca, 2) + Math.pow(co, 2));
}

function calculaCA(co, h){
  
    return Math.sqrt(Math.pow(co, 2) - (Math.pow(h, 2)));

}

function calculaCO(h, ca){
  
    return Math.sqrt(Math.pow(ca, 2) - (Math.pow(h, 2)));

}

function calculaPitagoras(h, ca, co){
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


function abastecePitagoras() {
    let h = document.getElementById("h").value;
    let ca = document.getElementById("ca").value;
    let co = document.getElementById("co").value;

    console.log(calculaPitagoras(h, ca, co));
    document.getElementById("resultado").innerHTML=calculaPitagoras(h,ca, co);
}



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