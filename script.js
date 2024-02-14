const img = window.document.getElementById('sem')

const buttons = window.document.getElementById('buttons')


const trafficLight = (event) => {
    turOn[event.target.id]()
    
}

const turOn = {
    red : () => img.src = 'imagens/vermelho.png',
    yellow  : () => img.src = 'imagens/amarelo.png',
    green : () => img.src = 'imagens/verde.png'
    
}

buttons.addEventListener('click' , trafficLight)