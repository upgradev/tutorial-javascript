//toLowerCase e toUpperCase

var frase = "Esta é a FRase que quero manipular"

var frasecaixaAlta = frase.toUpperCase()

console.log(frase.toLowerCase())
console.log(frasecaixaAlta)

//trim tirar os espaços entre a palavra

var nome = "        joao      "
var nomeTrim = nome.trim()
console.log(nome)
console.log(nomeTrim)

//split separar pelo q quer, espaço, virgula
console.log(frase.split(" "))

var tags = "PHP, html, javascript"
console.log(tags.split(", "))

//lastIndexOf indice da ultima palavra da string
var fraseDois = "Eu quero a ultima frase palavra desta frase"
console.log(fraseDois.indexOf("frase"))
console.log(fraseDois.lastIndexOf("frase"))