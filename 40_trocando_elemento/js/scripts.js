var el = document.createElement("h3")
el.classList = "testando-classe"
var texto = document.createTextNode("Este e o texto")
el.appendChild(texto)

var title = document.querySelector("#title")
//selecionar pai
// var body = document.querySelector("body")
var pai = title.parentNode

//trocar elemento
pai.replaceChild(el, title)
