console.log('\'Allo \'Allo!');
let pic1clicks = 0;
const elem1 = document.getElementById('my-elem1');
const cat1Name = document.querySelector('.cat1 h2').textContent;
elem1.addEventListener('click', function(){
  pic1clicks++;
  document.querySelector('#elem1-clicks').innerHTML=`You clicked ${cat1Name} ${pic1clicks} time(s).`;
}, false);

let pic2clicks = 0;
const elem2 = document.getElementById('my-elem2');
const cat2Name = document.querySelector('.cat2 h2').textContent;
elem2.addEventListener('click', function(){
  pic2clicks++;
  document.querySelector('#elem2-clicks').innerHTML=`You clicked ${cat2Name} ${pic2clicks} time(s).`;
}, false);
