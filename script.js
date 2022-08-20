let about = document.querySelector('.about');
let timeID = setTimeout(colorChange, 2000);

function colorChange() {
  let hero = document.querySelector('.hero');
  hero.style.transition = 'all 1s';
  hero.style.color = '#fb9039';
}
//change this to an element lower on the page
// clearTimeout(timeID);
// #fb9039
