const numeroA = document.getElementById('first-num');
const numeroB = document.getElementById('second-num');
const mensagemFinal = document.querySelector('#final-message');
let formEValido = false;

function comparaNumeros(numA, numB){
    return parseInt(numB) > parseInt(numA);
}

document.addEventListener('submit', function (e) {
    e.preventDefault();

    formEValido = comparaNumeros(numeroA.value,numeroB.value);

    const mensagemSucesso = `Parabéns! O número B (${numeroB.value}) é maior que o número A (${numeroA.value}), portanto o formulário é válido!`;
    const mensagemInsucesso = `O número B (${numeroB.value}) não é maior que o número A (${numeroA.value}), digite novamente!`;
    if(formEValido){
        mensagemFinal.innerHTML = mensagemSucesso;
        mensagemFinal.classList.remove('failure');
        mensagemFinal.classList.add('success') 
    }
    else{
        mensagemFinal.innerHTML = mensagemInsucesso;
        mensagemFinal.classList.remove('success')
        mensagemFinal.classList.add('failure')
    }
    mensagemFinal.style.display = 'block';
    numeroA.value = '';
    numeroB.value = '';
})