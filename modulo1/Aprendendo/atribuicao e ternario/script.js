var x = 5;
var y = 10;

x += y;  // x = x + y (15)
x -= y;  // x = x - y (-5)
x *= y;  // x = x * y (50)
x /= y;  // x = x / y (0.5)
x %= y;  // x = x % y (0)
x **= y; // x = x ** y (9765625)

//operador ternario

var idade = 24;
var possuiDiabete = false;
var podeBeber = (idade >= 18 && possuiDiabete === false) ? 'Sim' : 'Nao'; 
//? true :false
console.log(podeBeber);