const mainContainer = document.querySelector('#main-container');
const containerThx = document.querySelector('#container-thx');
const submitButton = document.querySelector('#botao');
const rating = document.querySelector('#rating'); //peguei o span!
const rates = document.querySelectorAll('.btn');


rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    });
});


submitButton.addEventListener('click', () => {
    containerThx.classList.remove('disp-none');
});