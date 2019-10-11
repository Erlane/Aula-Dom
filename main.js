let ibagemList = [
    './gato.gif',
    './gato1.gif',
    './gato2.gif',
    './gato3.gif',
    './gato4.gif',
]

let counter = 0;

let corpin = document.querySelector('body');

let before = document.createElement('h1');
let beforeText = document.createTextNode('<');
before.appendChild(beforeText);

let ibagem = document.createElement('img');
ibagem.setAttribute('src', ibagemList[counter]);


let next = document.createElement('h1');
let nextText = document.createTextNode('>');
next.appendChild(nextText);

function init() {
    console.log(before, next); 
    corpin.appendChild(before);
    corpin.appendChild(ibagem);
    corpin.appendChild(next);
}

before.addEventListener('click', function(){
    if ( counter > 0) {
      counter = counter - 1;
      ibagem.setAttribute('src', ibagemList[counter]);
    }
})

next.addEventListener('click', function(){
    if ( counter < 4) {
      counter = counter + 1;
      ibagem.setAttribute('src', ibagemList[counter]);
    } 
})

init();