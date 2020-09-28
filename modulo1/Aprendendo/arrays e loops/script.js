var videogames = ['Switch', 'Playstation', 'Xbox'];
videogames.pop(); //remove o ultimo item e retorna ele
videogames.push('3Ds'); //adiciona ao final do array
videogames.length; //3

var ultimoVideogame = videogames.pop();
console.log(ultimoVideogame);

for (var numero = 0; numero < 10; numero++){
  console.log(numero);
}
var i = 0
while(i<10){
  console.log(i);
  i++;
}

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva'];
for (var item = 0; item<frutas.length; item++){
  console.log(frutas[item]);
  if (frutas[item] === 'Pera'){
    break;
  }
}

frutas.forEach((item, index, array) => {
  console.log(item, index, array);
})