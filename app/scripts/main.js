// TODO: Make chosen cat show when name is clicked. maybe toggle hidden class?
console.log('\'Allo \'Allo!');

let catArray = [];

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

const catList = document.querySelectorAll('.cat-list li');

let cat1 = new Cat('Tim', 'kitty.jpg');
let cat2 = new Cat('Chad', 'cat-in-bag.jpg');
let cat3 = new Cat('John', 'stretching-cat.jpeg');
let cat4 = new Cat('Bridget', 'kitten-in-grass.jpeg');
let cat5 = new Cat('Karen', 'cat-in-lights.jpg');



catList[0].innerHTML = `${cat1.name}`;
catList[1].innerHTML = `${cat2.name}`;
catList[2].innerHTML = `${cat3.name}`;
catList[3].innerHTML = `${cat4.name}`;
catList[4].innerHTML = `${cat5.name}`;

// let pic1clicks = 0;
const elem1 = document.getElementById('my-elem1');
document.querySelector('.cat1 h2').textContent = cat1.name;
elem1.addEventListener('click', function(){
  cat1.clicks++;
  document.querySelector('#elem1-clicks').innerHTML=`You clicked ${cat1.name} ${cat1.clicks} time(s).`;
}, false);

// let pic2clicks = 0;
const elem2 = document.getElementById('my-elem2');
document.querySelector('.cat2 h2').textContent = cat2.name;
elem2.addEventListener('click', function(){
  cat2.clicks++;
  document.querySelector('#elem2-clicks').innerHTML=`You clicked ${cat2.name} ${cat2.clicks} time(s).`;
}, false);

const elem3 = document.getElementById('my-elem3');
document.querySelector('.cat3 h2').textContent = cat3.name;
elem3.addEventListener('click', function(){
  cat3.clicks++;
  document.querySelector('#elem3-clicks').innerHTML=`You clicked ${cat3.name} ${cat3.clicks} time(s).`;
}, false);

const elem4 = document.getElementById('my-elem4');
document.querySelector('.cat4 h2').textContent = cat4.name;
elem4.addEventListener('click', function(){
  cat4.clicks++;
  document.querySelector('#elem4-clicks').innerHTML=`You clicked ${cat4.name} ${cat4.clicks} time(s).`;
}, false);

const elem5 = document.getElementById('my-elem5');
document.querySelector('.cat5 h2').textContent = cat5.name;
elem5.addEventListener('click', function(){
  cat5.clicks++;
  document.querySelector('#elem5-clicks').innerHTML=`You clicked ${cat5.name} ${cat5.clicks} time(s).`;
}, false);
