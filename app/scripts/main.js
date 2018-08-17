// TODO: Make chosen cat show when name is clicked. maybe toggle hidden class?

let catArray = [];

let cats = document.querySelectorAll('.cat');
let buttons = document.querySelectorAll('button');

function hideAllCats() {
  for (var cat of cats) {
    cat.classList.add('hidden');
  }
}


class Cat {
  constructor(name, image) {
    this.name = name;
    this.clicks = 0;
    this.image = `./images/${image}`;
    catArray.push(this);
  }

  sayHi() {
    alert(this.name);
  }
}


let cat1 = new Cat('Tim', 'kitty.jpg');
let cat2 = new Cat('Chad', 'cat-in-bag.jpg');
let cat3 = new Cat('John', 'stretching-cat.jpeg');
let cat4 = new Cat('Bridget', 'kitten-in-grass.jpeg');
let cat5 = new Cat('Karen', 'cat-in-lights.jpg');



buttons[0].innerText = `${cat1.name}`;
buttons[1].innerText = `${cat2.name}`;
buttons[2].innerText = `${cat3.name}`;
buttons[3].innerText = `${cat4.name}`;
buttons[4].innerText = `${cat5.name}`;

function bindButtonToCat(idNumber){
	document.querySelector('#button'+idNumber).addEventListener('click', function(){
		hideAllCats();
		document.querySelector('#cat'+idNumber).classList.remove('hidden');
    let thisCat = catArray[idNumber-1];
    document.querySelector('#cat'+idNumber+' > h2').innerHTML = `${thisCat.name}`;
	}, false)
}

function bindCounterToCat(idNumber){
  let cat = '#cat'+idNumber
  document.querySelector(cat).addEventListener('click', function() {
    const count = document.querySelector(cat+' > .counter');
    let thisCat = catArray[idNumber-1];
    thisCat.clicks++;
    count.innerHTML = `You clicked ${thisCat.name} ${thisCat.clicks} time(s).`;
  }, false)
}

for (var i=1; i<=buttons.length; i++){
	bindButtonToCat(i);
}

for (var i=1; i<=cats.length; i++){
	bindCounterToCat(i);
}

hideAllCats();
document.querySelector('#cat1').classList.remove('hidden');
