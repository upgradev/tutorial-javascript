let pessoa = {
    nome: "joao",
    idade: 29,
    falar: function (){
        console.log("Ola tudo bem")
    },
    soma: function (a, b){
        return a + b
    }
}
console.log(pessoa.nome)
pessoa.falar()
var soma = pessoa.soma(2, 3)
console.log(soma)