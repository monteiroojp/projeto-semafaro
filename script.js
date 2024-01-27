const img = window.document.getElementById('sem')

const buttons = window.document.getElementById('buttons')


const trafficLight = (event) => {
    let button = event.target.id
    
    const red = img.src = 'imagens/vermelho.png'
    
    if(button =='red'){
        red()
    }

    const yellow = img.src = 'imagens/amarelo.png'

    if(button == 'yellow'){
        yellow()
    }
    
    const green = img.src = 'imagens/verde.png'
    
    if(button == 'green'){
        green()
    }

    
}

buttons.addEventListener('click' , trafficLight)