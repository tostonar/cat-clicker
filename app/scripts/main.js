console.log('\'Allo \'Allo!');
let clicks = 0;
const elem = document.getElementById('my-elem');
elem.addEventListener('click', function(){
  clicks++;
  document.querySelector('p').innerHTML=`You clicked ${clicks} time(s).`;
}, false);
