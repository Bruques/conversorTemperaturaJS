let resp = window.document.getElementById('resultado')
let resp2 = window.document.getElementById('resultado2')

function converter1() {
  let celsius = window.prompt('Digite uma temperatura em ºC (Celsius)')
  let convert1 = parseFloat(celsius * 1.8 + 32).toFixed(2)
  resp.innerHTML = `<h1>A temperatura de ${celsius}ºC, corresponde a...</h1>`
  resp2.innerHTML = `<p>${convert1} ºF (Fahrenheit)</p>`
}

function converter2() {
  let fahrenheit = window.prompt('Digite uma temperatura em ºF (Fahrenheit)')
  let convert2 = parseFloat((fahrenheit - 32) / 1.8).toFixed(2)
  resp.innerHTML = `<h1>A temperatura de ${fahrenheit}ºF, corresponde a...</h1>`
  resp2.innerHTML = `<p>${convert2} ºC (Celsius)</p>`
}
