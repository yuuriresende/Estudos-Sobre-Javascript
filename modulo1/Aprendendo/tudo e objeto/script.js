var nome = 'Yuri';
var nomeMinusculo = nome.toLowerCase();

var media = 11.8;
var mediaString = media.toString(); //transforma por coeçao(apenas no momento) em string 
var mediaArredondado = media.toFixed(); //arredonda por coeçao(apenas no momento) os numeros

function areaQuadrada(lado){
  return lado * lado;
}

areaQuadrada.toString();
// function areaQuadrada(lado){
//  return lado * lado;
//}
//RETORNO

areaQuadrada.length;
//retorna total de argumentos q a funçao possui - no caso 1

var btn = document.querySelector('.btn');
//btn.innerText; mostra oque esta escrito no botao

btn.addEventListener('click', () => {
  btn.classList.add('ativo');
  console.log('clicou');
});