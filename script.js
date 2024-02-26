let image = document.querySelector("img#sem")
let buttons = document.querySelector('div#buttons')
let colorIndex = 0
IntervalId =  null

const nextIndex = () => {
    colorIndex < 2? colorIndex++ : colorIndex = 0
}

const trafficLight = (Event) =>{

const changecolor = () => {
    let automatic = ['red','yellow','green']
    const color = automatic[ colorIndex ]
    colors[color]()
    nextIndex()
}

const stopInterval = () =>{
    clearInterval(IntervalId)
}

    
let colors = {
    red: () => image.src = 'imagens/vermelho.png',
    green: () => image.src = 'imagens/verde.png',
    yellow: () => image.src = 'imagens/amarelo.png',
    automatic: () => IntervalId = setInterval(changecolor, 1000)
}  
    var choosedButton = colors[Event.target.id]
    stopInterval()
    colors[Event.target.id]() 
      
    
    
}

buttons.addEventListener('click' , trafficLight)
