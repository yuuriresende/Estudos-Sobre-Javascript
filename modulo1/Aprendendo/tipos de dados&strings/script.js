var nome = 'Yuri'; //String
var idade = 24; //Number
var possuiFaculdade = false; //boolean
var time; //Undefined
var comida = null; //Null
var simbolo = Symbol() //Symbol
var novoObjeto = {} //Object

console.log(typeof simbolo);


////////////////////////////////STRINGS:////////////////////////////////
//Quando se soma strings em js entre '', o resultado é a concatenação das mesmas
var nome = 'Yuri';
var sobrenome = 'Resende';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

//Soma de strings com numeros(concatenação tambem):
var jogos = 478;
var frase = 'O Cássio jogou: ' + jogos + ' jogos pelo corinthians';
console.log(frase);

//Diferença de aspas em js
var frase1 = 'Este é um "exemplo" de utilização';
var frase2 = "Este também é um 'exemplo' de utilização";
var frase3 = "Mais um \"exemplo\" de utilizacao";
var frase4 = `Utilizando templatestring: ${nome}`;
console.log(frase4);
////////////////////////////////////////////////////////////////////////