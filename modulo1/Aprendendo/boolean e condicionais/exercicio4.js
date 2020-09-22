//Exercicio de fixacao 4:
//Verifique se a sua idade é maior que a de algum parente
//Dependendo do resultado coloque no console 'É maior', 'É igual';
var minhaIdade = 24;
var idadeParente = 26;

if(minhaIdade > idadeParente){
  console.log('é maior');
} else if (minhaIdade === idadeParente) {
  console.log('é igual');
} else {
  console.log('é menor');
}


//Qual é o valor retornado da seguinte expressão:
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao); //O valor retornado é 3(number)


//verifique se as seguintes variaveis sao Truthy ou Falsy
var nome = 'André';           //true
var idade = 28;               //true 
var possuiDoutorado = false;  //false
var empregoFuturo;            //false    
var dinheiroNaConta = 0;      //false
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);


//compare o total de habitantes do Brasil com China (valor em milhoes)
var brasil = 207;
var china = 1340;

if(brasil>china){
  console.log('Brasil tem mais habitantes')
} else {
  console.log('Brasil tem menos habitantes')
}

//O que irá aparecer no console:
if(('Gato' === 'gato') && (5>2)){
  console.log('verdadeiro');
} else {
  console.log('falso');
}
//ira aparecer falso

if(('Gato' === 'gato') || (5>2)){
  console.log('verdadeiro');
} else {
  console.log('falso');
}
//ira aparecer verdadeiro