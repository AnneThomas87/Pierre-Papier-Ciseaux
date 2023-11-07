document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.select');
    const playerNameInput = document.getElementById('playerName');
    const resultDisplay = document.getElementById('result');
    const playerScoreDisplay = document.getElementById('playerScore');
    const computerScoreDisplay = document.getElementById('computerScore');
    let playerScore = 0;
    let computerScore = 0;


    buttons.forEach(button => {
        button.addEventListener('click', playGame);
    });

    function playWinSound() {
        const winSound = document.getElementById('winSound');
        winSound.play();
    }
    function playLoseSound() {
        const loseSound = document.getElementById('loseSound');
        loseSound.play();
    }
    playerScore++;
    playWinSound();

    computerScore++;
playLoseSound();
    


    function playGame(e) {
        const playerName = playerNameInput.value;
        const playerSelection = e.target.id;
        const computerSelection = computerPlay();
        const result = playRound(playerName, playerSelection, computerSelection);

        resultDisplay.textContent = result;
      
    if (result.includes("gagne")) {
        playerScore++;
    } else if (result.includes("ordinateur gagne")) {
        computerScore++;

    }
    playerScoreDisplay.textContent = `Score de ${playerName}: ${playerScore}`;
    computerScoreDisplay.textContent = `Score de l'ordinateur: ${computerScore}`;

}

    function computerPlay() {
        const options = ['Pierre', 'Papier', 'Ciseaux'];
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex]; 
    }

    function playRound(playerName, playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return `Match nul entre ${playerName} et l'ordinateur !`;

        } else if (
            (playerSelection === 'Pierre' && computerSelection === 'Ciseaux') ||
            (playerSelection === 'Ciseaux' && computerSelection === 'Papier') ||
            (playerSelection === 'Papier' && computerSelection === 'Pierre')
        ) {
            playerScore++;
            playWinSound();
            return `${playerName} gagne ! ${playerName} choisit ${playerSelection} et l'ordinateur choisit ${computerSelection}.`;
        } else {
            computerScore++;
            playLoseSound();
            return `L'ordinateur gagne ! ${playerName} choisit ${playerSelection} et l'ordinateur choisit ${computerSelection}.`;
        }
    }
  
}
);


