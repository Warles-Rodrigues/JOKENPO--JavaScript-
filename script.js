const paragraph = document.querySelector('p')
const scoreHuman = document.querySelector('.your-score')
const scoreMachine = document.querySelector('.machine-score')

let humanPontuation = 0;
let machinePontuation = 0;

const GAME_OPTIONS = {
    ROCK:'rock',
    PAPER:'paper',
    SCISSORS:'scissors'
}


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playmachine())
}
const playmachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const random = Math.floor(Math.random() * 3)
    return choices[random]
}
const playTheGame = (human, machine) => {

    console.log('humano : '+ human + ' maquina :'+ machine)

    if (human === machine) {
        paragraph.innerHTML = 'Voçê Empatou ,Tente Novamente!'
    }
    else if((human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
            (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
            (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) 
    {
        humanPontuation++
        scoreHuman.innerHTML = humanPontuation
        paragraph.innerHTML = 'Parabens ,Voçê Ganhou!'
        
    }
    else {
        machinePontuation++
        scoreMachine.innerHTML = machinePontuation
        paragraph.innerHTML = "Voçê Perdeu ,Tente Novamente!"
    }
}


