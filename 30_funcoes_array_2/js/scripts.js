// splice adicionar em qq posicao do array
var arr = [1,2,3,4,5]
arr.splice(2, 0, 999)
console.log(arr)

//deletar um elemento
arr.splice(4, 1)
console.log(arr)

//indexof identificar posicao
console.log(arr.indexOf(5))

//join
var arr2 = ["o", "rato", "roeu"]
console.log(arr2.join(","))

//reverse inverter array
console.log(arr2.reverse())