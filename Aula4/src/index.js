
function executaTraducao(){
    let texto = document.getElementById("ing").value;
    switch(texto){
        case "good morning":
            return "Bom Dia";
            break;
        case "good afternoon":
            return "Boa Tarde";
            break;
        case "good night":
            return "Boa Noite";
            break;
        default:
            return "Fora da tradução!";
    }
}

function fazTraducao(){
    document.getElementById("port").innerHTML=executaTraducao();
}