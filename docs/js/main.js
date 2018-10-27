window.addEventListener('load', init);

const init = () => {
  document.querySelector('.call-to-action').addEventListener('click', modal);
}

const modal = () => {
  document.querySelector('.modal').style.top='100px';
}