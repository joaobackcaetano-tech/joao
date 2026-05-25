
// script.js

function calcularPreco() {

  const produto = document.getElementById("produto").value;
  const quantidade = Number(document.getElementById("quantidade").value);

  let preco = 0;

  // preços por saca
  switch(produto) {
    case "soja":
      preco = 135;
      break;

    case "milho":
      preco = 68;
      break;

    case "trigo":
      preco = 92;
      break;

    case "cafe":
      preco = 1100;
      break;
  }

  const total = quantidade * preco;

  document.getElementById("resultado").innerHTML =
    `Valor total da produção: <br> R$ ${total.toFixed(2)}`;
}
