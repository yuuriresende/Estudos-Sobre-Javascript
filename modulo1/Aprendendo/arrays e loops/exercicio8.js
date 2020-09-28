//Exercicios de fixacao 8:
//Crie uma array com os anos que o Brasil ganhou a copa
var titulosBrasil = [1959, 1962, 1970, 1994, 2002];

//faça um loop onde mostre o array com uma frase antes
titulosBrasil.forEach((ano) => {
    console.log(`O Brasil foi campeao no ano ${ano}`)
});

//Interaja com um loop nas frutas abaixo e pare ao chegar em pera

var frutas = ['Banana', 'Maçã', 'Pera', 'Abacaxi', 'Uva'];
for (var fruta=0; fruta < frutas.length; fruta++){
  if(frutas[fruta] === 'Pera'){
    break;
  }
  console.log(frutas[fruta])
}

//Coloque a ultima fruta da array em uma variavel
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);