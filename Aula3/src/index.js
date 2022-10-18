function calculaA(b, c, d){
    return (b * c) / d;
}

function calculaB(a, c, d){
    return (a * d) / c;
}

function calculaC(b, a, d){
    return (a * d) / b;
}

function calculaD(b, c, a){
    return (b * c) / a;
}

function calculaRegra(a, b, c, d){
    if (a == 0)
    {
        return calculaA(b, c, d);
    } 
    else if (b == 0) 
    {
        return calculaB(a, c, d);
    }
     else if (c == 0)
    {
        return  calculaC(b, a, d);
    } else {
        return calculaD(b, c, a);
    }
}

console.log(calculaRegra(100, 320, 40, 0));








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