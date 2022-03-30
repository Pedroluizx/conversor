function converter() {
  const cotacaodollar = 4.83
  const cotacaoeuro = 5.31
  const valor = document.getElementById('vlrdigitado').value

  let resultadodollar = valor / cotacaodollar
  let resultadoeur = valor / cotacaoeuro

  document.getElementById('resultadodollar').innerHTML =
    resultadodollar.toFixed(2)

  document.getElementById('resultadoeur').innerHTML = resultadoeur.toFixed(2)
}

function limpar() {
  document.getElementById('vlrdigitado').value = ''
  document.getElementById('resultadoeur').innerHTML = ''

  document.getElementById('resultadodollar').innerHTML = ''
}
