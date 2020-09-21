//////////////////////BOOLEAN E CONDICIONAIS://////////////////////////
var possuiMundial = false;
var possuiSoCopaVerao = true;

if (possuiMundial){
  console.log('Possui Mundial')
} else if(possuiSoCopaVerao) {
  console.log('Copa de verao nao e mundial')
} else {
  console.log('Nao possui mundial')
}

if(!possuiMundial){
  console.log('nao possui mundial');
} else {
  console.log('possui Mundial')
}



var valor = 5;
console.log(valor == 5);    //true -> verifica se os valores sao iguais desconsiderando o tipo
console.log(valor === 5);   //true -> verifica se os valores sao iguais considerando o tipo
var valor2 = '10';
console.log(valor2 == 10);  //true 
console.log(valor2 === 10); //false

var animal = 'cachorro';
console.log(animal !== 'cachorro');  //false, tem os mesmos valores e mesmo tipo
console.log(animal !== 'cachorros'); //true, valores diferentes;

var valor3 = '30';
console.log(valor3 !== 30); //true -> tipos diferentes
console.log(valor3 != 30);  //false -> valores iguais



//Expressoes que retornam false, todo resto eh true//
/*
if(false);
if(0);
if(NaN);
if(null);
if(undefined);
if('');

//retorno true
if(true);
if(1);
if(' ');
if('Yuri');
if(-5);
if({})
... Entre outras 
*/