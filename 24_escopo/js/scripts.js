var x = 1 //escopo global
var y = 3;
console.log("Global: " + x, y)
function teste() {
    var z  =0 //escopo local
    console.log("Local: ", z)
}

teste()

if(true){
    var p = 1 //não armazena apenas local, se misturam no global
}

console.log("de condicional: ", p)