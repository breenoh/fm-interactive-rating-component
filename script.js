const buttonRate = document.querySelectorAll('.rate');
const buttonSubmit = document.querySelector('#botao');
const dispNone = document.querySelector('#container-thx');








// aqui colocamos dispnone no container de agradecimento, que aparecera depois de dar um rating

// colocar condição para ser  obrigatorio votar para apenas assim o botao submit funcionar
buttonSubmit.addEventListener('click', function () {
    dispNone.classList.toggle('disp-none');
});