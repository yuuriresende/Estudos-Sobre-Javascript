/////////////////////////////OBJETOS/////////////////////////////////////////
//Conjunto de variaveis e funcoes que sao chamadas de propriedades e metodos
var pessoa = {
  nome: 'Yuri',
  idade: 24,
  profissao: 'Programador',
  possuiFaculdade: false,
}
console.log(pessoa.idade);

//Metodos e uma  propriedade que possui uma funcao no local do seu valor

var quadrado = {
  lados: 4,
  area(lado){
    return lado * lado;
  },
  perimetro(lado){
    return this.lados * lado; //this acessa 'esse' objeto
  },
  cinco(){
    return 5;
  }
}
console.log(quadrado.area(5));
console.log(quadrado.perimetro(3));
console.log(quadrado.cinco());

var height = 100;
var menu = {
  width: 800,
  height: 500,
  backgroundColor:'#84e',

  metadeHeight(){
    return this.height / 2; //ira retornar o height referente ao objeto
  }
}

var bg = menu.backgroundColor;
menu.backgroundColor = '#000';

menu.color = 'blue';
menu.esconder = () => {
  console.log('Escondi');
}
//podemos adicionar novos parametros e metodos aos objetos

