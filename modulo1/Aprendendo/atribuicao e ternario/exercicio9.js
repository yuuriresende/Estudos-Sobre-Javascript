//Exercicios de fixacao 8:
//some 500 ao valor de scroll abaixo, atribuindo o novo valor ao scroll
var scroll = 1000;
scroll += 500;

//atribua true para a variavel darCredito caso o cliente tenha carro e casa
//e false caso contrario
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

if(possuiCarro && possuiCasa){
  darCredito = true;
} else {
  darCredito = false;
}

//OU

darCredito = (possuiCarro && possuiCasa);
console.log(darCredito);