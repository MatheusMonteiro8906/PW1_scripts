// Pitágoras:

function calculaH(ca, co){
    return Math.sqrt(Math.pow(ca, 2) + Math.pow(co, 2));
}
function calculaCa(co, h){
    return Math.sqrt(Math.pow(h, 2) - Math.pow(co, 2));
}
function calculaCo(ca, h){
    return Math.sqrt(Math.pow(h, 2) - Math.pow(ca, 2));
}

function calculaPitagoras(h, ca, co){
    if(h == 0){
        return calculaH(ca, co);
    }else if(ca == 0){
        return calculaCa(co, h);
    }else{
        return calculaCo(ca, h);
    }
}

function abastecePitagoras(){
    let h = document.getElementById("h").value;
    let ca = document.getElementById("ca").value;
    let co = document.getElementById("co").value;

    console.log(calculaPitagoras(h, ca, co));
    document.getElementById("resultado").innerHTML=calculaPitagoras(h, ca, co);
}

// Regra de três:

function calculaA(b, c, d){
    return (b*c)/d;
}
function calculaB(a, c, d){
    return (a*d)/c;
}
function calculaC(b, a, d){
    return (a*d)/b;
}
function calculaD(b, c, a){
    return (b*c)/a;
}

function calculaRegraTres(a, b, c, d){
    if(a==0){
        return calculaA(b, c, d);
    }else if(b == 0){
        return calculaB(a, c, d);
    }else if(c == 0){
        return calculaC(b, a, d);
    }else{
        return calculaD(b, c, a);
    }
}

// Calculadora

function calculaNumeros(n1, n2, op){
    if(op == "+"){
        return (n1 + n2);
    }
    if(op == "-"){
        return (n1 - n2);
    }
    if(op == "*"){
        return (n1 * n2);
    }
    if(op == "/"){
        return (n1 / n2);
    } 
    if(op == "raiz"){
        return Math.sqrt(n1+n2);
    }
    if(op == "potencia" ){
        return Math.pow(n1, n2);
    }
}

// Calculadora Avançada:

function calculaAvancado(opcao, p1, p2, p3, p4){
    switch(opcao){
        case "pitagoras":
            return calculaPitagoras(p1, p2, p3);
            break;
        case "regra":
            return calculaRegraTres(p1, p2, p3, p4);
            break;
        case "calculadora":
            return calculaNumeros(p1, p2, p3);
            break;
        default:
            return "Blá blá blá não existe";
    }   
}

console.log(calculaAvancado("regra", 100, 25, 24, 0));