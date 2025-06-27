const number = document.querySelector('.number');
const btn = document.querySelectorAll('.buttons')[0];

const generateRandomNumber = ()=> {
    const random = Math.floor(1000+Math.random()*9000);
    number.innerHTML = random;
}

btn.addEventListener('click', ()=> {
  generateRandomNumber();
})