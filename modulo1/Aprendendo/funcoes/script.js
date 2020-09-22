/////////////////////////FUNCOES////////////////////
function areaQuadrada(lado){  
  return lado * lado;
}
console.log(areaQuadrada(2));


function pi(){
  return 3.14;
}
console.log(5 * pi())


function imc(altura, peso){
  var imc = peso / (altura * altura)
  return imc;
}
console.log(imc(1.7, 69));

function corFavorita(cor){
  if (cor === 'azul'){
    return 'voce gosta do azul';
  } else if (cor === 'verde'){
    return 'voce gosta de plantas';
  } else {
    return 'voce nao gosta de nada';
  }
}

//Funcoes anonimas
addEventListener('click', function(){
  console.log('Houve um click');
});

//ES6+
addEventListener('click', () => {
  console.log('Houve um click');
});

//passar a funcao como parametro em uma funcao
function mostrarNoConsole(){
  console.log('Deu certo')
}
addEventListener('click', mostrarNoConsole);


function terceiraIdade(idade){
  if(typeof idade !== 'number'){
    return 'Digite um numero'
  } else if (idade >= 60){
    return true;
  } else {
    return false; 
  }
}
console.log(terceiraIdade(60));


function paisesAVisitar(paisesavisitar){
  var totalPaises = 193;
  return `Falta visitar: ${totalPaises - paisesavisitar} paises`
}


// undefined pois a variavel esta dentro do escopo da funcao

var profissao = 'Programador';

function dados(){
  var nome = 'Yuri';
  var idade = 24;
  function outrosDados(){
    var endereco = 'R Colombia - Pocos de Caldas';
    var idade = 25;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());       
//Retorna 'Yuri', 24, R Colombia - Pocos de Caldas, programador
//outrosDados(); retorna um erro