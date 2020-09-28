//PARA O INDEX FUNCIONAR, PRECISA COMENTAR AS LINHAS QUE POSSUEM O COMENTARIO 'ERRO'

//variaveis declaradas no escopo do pai da função,
//conseguem ser acessadas pelas funções

//ESCOPO DE FUNÇÃO
var carro = 'Gol';
function mostraCarro(){
  var frase = `Meu carro é um ${carro}`
  console.log(frase);
}

mostraCarro();
console.log(carro);

//ESCOPO DE BLOCO
//variaveis criadas com var, vazam do bloco.
//no es6 a melhor forma e declarando com const ou let, pois estas
//respeitam os  blocos
if(true){
  const fruta = 'Melancia';
  console.log(fruta);
}
console.log(fruta); //erro

var i = 50;
for(let i = 0; i<10; i++){
  console.log(`Numero ${i}`)
}
console.log(i * 50); //pega a variavel definida acima pois o let i limita apenas ao bloco

//CONST
//Mantem o escopo no bloco, impede a redeclaração e impede a 
//modificação do valor da variável, evitando bugs no código
const mes = 'Dezembro';
mes = 'Abril'; //erro, tentou modificar o valor
const semana; //erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2020,
}

data.dia = 31; //funciona
data = 'janeiro'; //nao funciona-obviamente- erro

//LET
//Matem o escopo no bloco, impede a redeclaracao,
//mas permite a alteração do valor da variavel
let ano;
ano = 2018;
ano ++;
console.log(ano);

let ano = 2020; //erro
