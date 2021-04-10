//length
var arr = [1,2,3,4,5]
console.log(arr.length)

//push adicionar
arr.push(6)
arr.push("teste")
console.log(arr)

//pop remove do fim
arr.pop()
console.log(arr)

// unshift adiciona no inicio
arr.unshift(0)
console.log(arr)

//remove do inicio do array
arr.shift()
console.log(arr)

//acessar o ultimo elemento
console.log(arr[arr.length - 1])

//isArray se é um array
console.log(Array.isArray(4))
console.log(Array.isArray(arr))
