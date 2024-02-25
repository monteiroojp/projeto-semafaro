let image = document.querySelector("img#sem")
let buttons = document.querySelector('div#buttons')

const trafficLight = (Event) =>{

const changecolor = () => {
    
}
    
let colors = {
    red: () => image.src = 'imagens/vermelho.png',
    green: () => image.src = 'imagens/verde.png',
    yellow: () => image.src = 'imagens/amarelo.png',
    automatic: () => changecolor()
}  
    var choosedButton = colors[Event.target.id]
    colors[Event.target.id]() 
      
    
    
}

buttons.addEventListener('click' , trafficLight)
