let tiles = document.querySelectorAll('td');

let currentNum = 1;
let numbersMade = 0;
let gameStatus = "shown";
let tilesToGuess = 3;

tiles.forEach((e) => {
    e.addEventListener('mousedown', () => {
        if (gameStatus == "winner") {
            autoGame();
            return;
        }
        if (gameStatus == "loser") {
            reset();
            tilesToGuess = 3;
            autoGame();
            return;
        }
        if (gameStatus == "shown") {
            hideNumbers();
            startGame();
        }
        if (e.textContent == currentNum + 1) {
            e.style.backgroundColor = 'white';
            e.style.color = 'black';
            currentNum++;
            checkForWinner();
        } else {
            tiles.forEach((e) => {
                e.style.color = 'black';
                e.style.backgroundColor = 'white';
                gameStatus = "loser";
            });
            e.style.backgroundColor = 'red';
        }
    })
});

function reset() {
    currentNum = 1;
    numbersMade = 0;
    tiles.forEach((e) => {
        e.style.color = 'black';
        e.style.backgroundColor = 'white';
        e.textContent = "";
        gameStatus = "shown";
    });
}

function selectTile() {
    let selectedTile = tiles[Math.floor(Math.random() * tiles.length)];
    if (selectedTile.textContent != "") {
        selectTile();
    } else {
        selectedTile.textContent = currentNum;
        currentNum++;
        numbersMade++;
    }
}

function hideNumbers() {
    tiles.forEach((e) => {
        e.style.color = '#4c6da6';
        e.style.backgroundColor = '#4c6da6';
    })
}

function startGame() {
    currentNum = 0;
    gameStatus = "playing";
}

function checkForWinner() {
    if (currentNum == numbersMade) {
        tiles.forEach((e) => {
            e.style.backgroundColor = '#8ff795';
            gameStatus = "winner";
        });
        tilesToGuess++;
    }
}

function autoGame() {
    reset();
    // let howManyToGuess = document.getElementById('howManyToGuess').value;
    for (let i=0; i < tilesToGuess; i++) {
        selectTile();
    }
}