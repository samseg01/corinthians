const hino = new Audio('hino.mp3');
const efeito = new Audio('Corinthians vinheta da Radio! Corinthians.mp3')

window.addEventListener('load', ()=>{
    hino.currentTime = 0;
    hino.play();
})

document.getElementById('logo').addEventListener('click', ()=>{
    efeito.currentTime = 3.66;
    efeito.play();
})