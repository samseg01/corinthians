const hino = new Audio('hino.mp3');
const efeito = new Audio('Corinthians vinheta da Radio! Corinthians.mp3')

document.getElementById('logo').addEventListener('click', ()=>{
    efeito.currentTime = 3.66;
    efeito.play();
})

setInterval(()=>{
    hino.currentTime = 0.0;
    hino.play();
}, 5000)