//Exercicio de fixacao 5:
//Crie uma funcao para verificar se um valor e truthy:
function isTruth(valor){
  return !!valor;
}
console.log(isTruth(0));

//crie uma funcao matematica que retorne o perimetro de um quadrado
function perimetro(comprimento, largura){
  var perimetro = comprimento * largura;
  return perimetro;
}
console.log(perimetro(2,4))

//Crie uma funcao que retorne seu nome completo
function nomeCompleto(nome, sobrenome){
  var nomeCompleto = `${nome} ${sobrenome}`;
  return nomeCompleto;
}

console.log(nomeCompleto('Yuri', 'Resende'))

//Crie uma funcao que verifica se o numero e par:
function ePar(numero){
  if(numero % 2 == 0){
    return 'eh par';
  } else {
    return 'eh impar'; 
  }
}

console.log(ePar(4));
console.log(ePar(5));

//Crie uma funcao que retorne o tipo de dado do argumento passado nela
function dataType(dado){
  return typeof dado;
}
console.log(dataType(5))

addEventListener('scroll', () => {
  console.log('Yuri do Amaral Resende')
});