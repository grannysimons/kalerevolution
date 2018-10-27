window.addEventListener('load', start);

function start() {
  console.log('init');
  document.querySelector('.call-to-action').addEventListener('click', modalIn);
  document.querySelector('.modal .close').addEventListener('click', modalOut)
  slider();
}

function modalIn() {
  console.log('modal');
  document.querySelector('.modal').style.top='100px';
  document.querySelector('.modal').style.transition='all 1s';
  document.querySelector('.modal .overlay').style.display='block';
}
function modalOut() {
  console.log('modalOut');
  document.querySelector('.modal').style.top='-600px';
  document.querySelector('.modal').style.transition='all 1s';
  document.querySelector('.modal .overlay').style.display='none';
}

var sliderNum = 1;
function slider() {
  console.log('slider');
  setInterval(1000, moveSlide);
}
function moveSlide(){
  document.querySelector('slide1').style.left = width*(sliderNum);
  document.querySelector('slide2').style.left = width*(sliderNum+1);
  document.querySelector('slide3').style.left = width*(sliderNum+2);
  document.querySelector('slide4').style.left = width*(sliderNum+3);
  (sliderNum++)%4;
}