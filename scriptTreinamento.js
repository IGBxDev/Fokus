

//1) Capturando elementos com JavaScript
const focoBtn = document.getElementById('foco')
const descansoCurtoBtn = document.getElementById('descanso-curto')
const descansoLongoBtn = document.getElementById('descanso-longo')
const timer = document.getElementById('timer')
const iniciarBtn = document.getElementById('iniciar')

//2) Criando variáveis no JavaScript
console.log(`focoBtn: ${focoBtn}`)
console.log(`descansoCurtoBtn: ${descansoCurtoBtn}`)
console.log(`descansoLongoBtn: ${descansoLongoBtn}`)
console.log(`timer: ${timer}`)

//3) Criando botões da aplicação
focoBtn.addEventListener('click', () => {
    console.log('Botão foco clicado')
})

descansoCurtoBtn.addEventListener('click', () => { 
    console.log('Botão descanso curto clicado')
})

descansoLongoBtn.addEventListener('click', () => {
    console.log('Botão descanso longo clicado')
})

iniciarBtn.addEventListener('click', () => {
    console.log('Botão iniciar clicado')
})

//4) Criando variáveis para armazenar o tempo
const tempoFoco = 1500
const tempoDescansoCurto = 300  
const tempoDescansoLongo = 900  

//5) Exibindo as variáveis no console
console.log(`tempoFoco: ${tempoFoco}`)
console.log(`tempoDescansoCurto: ${tempoDescansoCurto}`)   
console.log(`tempoDescansoLongo: ${tempoDescansoLongo}`)


    


