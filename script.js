const html = document.querySelector('html')
const focoBtn = document.querySelector('.app__card-button--foco')
const shortBtn = document.querySelector('.app__card-button--curto')
const longBtn = document.querySelector('.app__card-button--longo')
const startPauseBtn = document.querySelector('#start-pause')
const startPauseIcon = document.querySelector('.app__card-primary-butto-icon')
const banner = document.querySelector('.app__image')
const app_title = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica')
const startOuPauseBtn = document.querySelector('#start-pause span')
const tempoNaTela = document.querySelector('#timer')
const startOuPausarIcon = document.querySelector('#start-pause img')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
const audioPlay = new Audio('/sons/play.wav')
const audioPause = new Audio('/sons/pause.mp3')
const audioBeep = new Audio('/sons/beep.mp3')
musica.loop = true

let tempoDecorridoEmSegundos = 1500
let intervaloId = null


focoBtn.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    alterarContexto('foco')
    focoBtn.classList.add('active')

})

shortBtn.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
    alterarContexto('descanso-curto')
    shortBtn.classList.add('active')
})

longBtn.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900
    alterarContexto('descanso-longo')
    longBtn.classList.add('active')    
})

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused){
        musica.play()
     
    }else{  
        musica.pause()
    }
})


const alterarContexto = (contexto)=>{
    mostrarTempo()
        botoes.forEach((botao) => {
        botao.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)

    switch(contexto) {
        case 'foco':
            app_title.innerHTML = `Otimize sua produtividade, <br>
                <strong class="app__title-strong">Mergulhe no que importa.</strong>`
            break
        case 'descanso-curto':
            app_title.innerHTML = `Que tal dar uma respirada? <br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break
        case 'descanso-longo':
            app_title.innerHTML = `Hora de voltar à superfície. <br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break
        default:
            break
    }

}

const iniciarOuPausarContador = () => {
    if(intervaloId){
        zerar()
        audioPause.play()
        return
    }

    if(audioPlay.paused){
        audioPlay.play()
    }

    intervaloId = setInterval(contagemRegressiva, 1000)
}

const contagemRegressiva = () =>{
    if(tempoDecorridoEmSegundos === 0){        
        audioBeep.play()
        zerar()
        tempoDecorridoEmSegundos = 5
        alert('Acabou!')
        return
    }    
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
    console.log('Temporizador '+ tempoDecorridoEmSegundos)
    startOuPauseBtn.textContent = "Pausar"
    startOuPausarIcon.setAttribute('src', '/imagens/pause.png')
    
}

startPauseBtn.addEventListener('click', iniciarOuPausarContador)

const zerar = () => {
    clearInterval(intervaloId)
    intervaloId = null
    startOuPauseBtn.textContent = "Começar"
    startOuPausarIcon.setAttribute('src', '/imagens/play_arrow.png')

}

const mostrarTempo = () => {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-BR',{ minute: '2-digit', second: '2-digit'})   
    tempoNaTela.textContent = `${tempoFormatado}`
}

mostrarTempo()