//Exercicios de fixacao 10:
//Por qual motivo o codigo abaixo retorna erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}

console.log(var, marca, portas);
//alem do erro de 'procurar' marca e portas que estao dentro do bloco
//tem o erro de sintaxe tambem pois var eh uma palavra reservada

//como corrigir o erro abaixo?
function somarDois(x){
  const dois = 2
  return x + dois; 
}
function dividirDois(x){
  return x / dois;
}
//corrige colocando a constante dois, fora do escopo da função somar

//O que fazer para total retornar 500?
var numero = 50;

for(var numero = 0; numero <10; numero++){
  console.log(numero);
}

const total = 10 * numero;
console.log(total)
//a solução é trocar o var do for por let, pois o let limita a variavel naquele bloco
