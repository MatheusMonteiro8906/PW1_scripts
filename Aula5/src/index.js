function executaTraducao() {
  let texto = document.getElementById("ing").value;
  switch (texto) {
    case "good morning":
      return "Bom dia";
      break;
    case "good afternoon":
      return "Boa tarde";
      break;
    case "good night":
      return "Boa noite";
      break;
    default:
      return "Fora de tradução!";
  }
}

function fazTraducao() {
  document.getElementById("port").innerHTML = executaTraducao();
}
