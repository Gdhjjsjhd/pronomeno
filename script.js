const displayTimer = document.querySelector('.timer');
const botaoiniciar = document.getElementById('start');
const botaoResetar = document.getElementById('reset');

let tempoRestante = 1500
let timeId;

function iniciarTimer(){
    timeId = setInterval
    (atualizarTimer, 1000)

    botaoiniciar.disabled = true;
}

function paraTimer(){
    clearInterval(timeId)
    botaoiniciar.disabled = false;
}

function reiniciarTimer(){
    paraTimer();
    tempoRestante = 1500;
    atualizarTimer();
}

function atualizarTimer(){
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;

    displayTimer.textContent = `
    ${minutos.toString(). padStart(2, '0')}:
    ${segundos.toString().padStart(2, '0')}
    `
    if(tempoRestante === 0){
        paraTimer();
        alert('Pomodoro concluído!🐱‍👤');
    }else{
        tempoRestante--;
    }
}

botaoiniciar.addEventListener('click', iniciarTimer);
botaoResetar.addEventListener('click', reiniciarTimer);