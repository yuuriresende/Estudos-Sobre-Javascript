/////////////////////////NUMBERS E OPERATORS:///////////////////////////
var age = 24;
var pi = 3.14;
var exponencial = 4e10 //40000000000

var soma = 24 + 25;          // 49
var subtracao = 26 - 23;     // 3
var multiplicacao = 100 * 2; // 200
var divisao = 100/2;         // 50
var expoente = 4 ** 4;       // 16
var modulo = 14 % 5;         // 4

var soma1 = '100' + 14;           // 10014
var subtracao1 = '100' - 50;      // 50
var multiplicacao1 = '100' * '2'; // 200
var divisao1 = 'Comprei 10' / 2 ; // NaN

var total1 = 20 + 5 * 2;          //30
var total2 = (20 + 5) * 2;        //50
var total3 = 20 / 2 * 5;          //50
var total4 = 10 + 10 * 2 + 20 / 2 //40

var incremento = 5;
console.log(incremento++); //5 ->primeiro retorna o valor dps faz a soma
console.log(incremento);   //6
//Realiza o incremento/decremento depois

var incremento2 = 6;
console.log(--incremento2);  //5 ->ao decrementar antes a variavel ja estara com o valor
console.log(incremento2);    //5
//realiza o incremento/decremento antes

var titulos = '240';
+titulos;         //240(number)

var titulosPaulistas = +'50'; //50(number)

var isWorldChampion = true;
+isWorldChampion; //1 

var nomeTime = 'Sport Club Corinthians Paulista';
+nomeTime;        //NaN

var titulosNovos = 5;
console.log(+titulos + titulosNovos);  //245
console.log(+titulos + -titulosNovos); //235
//'+' e '-' tenta transformar o valor seguinte em numero