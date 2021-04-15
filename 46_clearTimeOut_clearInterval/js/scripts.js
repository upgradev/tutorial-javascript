var x = 0;
var myTimer = setInterval(function () {
    console.log("o x é zero")
}, 1500)

x = 5
if(x > 0){
    clearTimeout(myTimer)
    console.log("o x passou de zero")
}


//clearinterval

var myInterval = setInterval(function (){
    console.log("Imprimindo ")
}, 500)

setTimeout(function (){
    console.log("nao precisa repetir")
    clearInterval(myInterval)
}, 1500)
