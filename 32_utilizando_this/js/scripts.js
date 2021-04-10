console.log(this)

var teste = 5
console.log(this.teste)

let pessoa = {
    nome: "joao",
    idade: 29,
    falar: function (){
        console.log("Ola tudo bem")
    },
    dizerNome: function (){
        console.log("O meu nome é ", this.nome)
    },
    aniversario : function (){
        this.idade += 1
    }
}

pessoa.dizerNome()
console.log(pessoa.idade)
pessoa.aniversario()
console.log(pessoa.idade)
