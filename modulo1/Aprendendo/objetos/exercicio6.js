//Exercicio de fixacao 6:
//Crie um objeto com os seus dados pessoais
var dadosPessoais = {
  nome: 'Yuri',
  sobrenome: 'Resende',
  idade: 24,
  cidade: 'Poços de caldas',
  estado: 'MG',

  mostrarNome: () => {
    return `${this.nome} ${this.sobrenome}`
  }
}

//Crie um metodo no objeto anterior para mostrar seu nome completo
dadosPessoais.nomeCompleto = () => {
  return `${this.nome} ${this.sobrenome}`
}
  
//modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  porta: 4,
  marca: 'Audi'
}
carro.preco = 3000;

//Crie um objeto de um cachorro que represente um labrador preto de 10 anos
//que late ao ver um homem
var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,

  latir: (pessoa) => {
     if(pessoa === 'homem'){
       return 'roof'
     } else {
       return 'hmm'
     }
  }
}