function exibir(num) {
    console.log("A op resultou em: ", num)
}


function soma(a, b, callback) {
    var op = a + b;
    callback(op)
}

function mult(a, b, cb) {
    var op = a * b;
    cb(op)
}

soma(2, 2, exibir)
mult(3, 4, exibir)
