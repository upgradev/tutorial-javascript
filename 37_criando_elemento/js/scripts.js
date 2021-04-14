//inserir no body
var novoParagrafo = document.createElement("p")
var texto = document.createTextNode("Este é o conteudo")
novoParagrafo.appendChild(texto)
var body = document.querySelector("body")
body.appendChild(novoParagrafo)


var container = document.querySelector("#container")

var el = document.createElement("span")
el.appendChild(document.createTextNode("Texto com span"))
container.appendChild(el)
