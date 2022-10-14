/*----- constants -----*/
let POSITION = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5, 
    g: 6,  // avengers collection
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13 // thanos collection
};

/*----- app's state (variables) -----*/

let board, turn, winner, boardIds;


/*----- cached element references -----*/

const stonesEl = document.getElementsByClassName('stones').textContent;
const avengersGifEl = document.getElementById('avengersGif');
const turnAEl = document.getElementById('turnA');
const thanosGifEl = document.getElementById('thanosGif');
const turnTEl = document.getElementById('turnT');
const logoEl = document.getElementById('logo');
const logo2El = document.getElementById('logo2');
const instructEl = document.getElementById('instructions');
const bgPlayer = document.getElementById('bg-player');
// adjust player to 50% volume
bgPlayer.volume = .5;
/*----- event listeners -----*/

document.getElementById('avengersPlanets').addEventListener('click', handleFirstMove);
document.getElementById('thanosPlanets').addEventListener('click', handleFirstMove);
document.getElementById('help').addEventListener('click', handleInstruct);
window.addEventListener("load", event => {
document.getElementById("playAgain").onclick = function() {
    location.reload(true);
    }
});

/*----- functions -----*/
init();

function init() {
    board = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
    turn = 1; //avengers turn
    winner = null;
    boardIds = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
    render();
  }

function render() {
    renderBoard();
    renderMessage();
}

function renderMessage() {
    if (winner === 1) {
        avengersGifEl.style.visibility = 'visible';
        turnAEl.style.visibility = 'visible';
        avengersGifEl.style.marginLeft = '420px';
        turnAEl.style.marginLeft = '450px';
        turnAEl.innerHTML = 'Avengers Win!';
        thanosGifEl.style.visibility = 'hidden';
        turnTEl.style.visibility = 'hidden';
        logoEl.style.opacity = '15%';
        logo2El.style.opacity = '15%';
        
    } else if (winner === -1) {
        thanosGifEl.style.visibility = 'visible';
        turnTEl.style.visibility = 'visible';
        thanosGifEl.style.marginLeft = '420px';
        turnTEl.style.marginLeft = '450px';
        turnTEl.innerHTML = 'Thanos Wins';
        avengersGifEl.style.visibility = 'hidden';
        turnAEl.style.visibility = 'hidden';
        logoEl.style.opacity = '15%';
        logo2El.style.opacity = '15%';
    }
}

function renderBoard() {
    // Iterate over the array
    board.forEach(function(num, Idx) {
      // Iterate over the cells in the current collumn (colArr)
        const cellId = `${boardIds[Idx]}`;
        const cellEl = document.getElementById(cellId);
        cellEl.innerHTML = num;
    });
    if(turn === 1) {
        thanosGifEl.style.visibility = 'hidden';
        turnTEl.style.visibility = 'hidden';
        avengersGifEl.style.visibility = 'visible';
        turnAEl.style.visibility = 'visible';
        turnAEl.innerHTML = 'Avengers Turn!';
    } else {
        avengersGifEl.style.visibility = 'hidden';
        turnAEl.style.visibility = 'hidden';
        thanosGifEl.style.visibility = 'visible';
        turnTEl.style.visibility = 'visible';
        turnTEl.innerHTML = 'Thanos Turn!';
    }
}

function handleInstruct(evt) {
    evt.preventDefault();
    if (instructEl.style.visibility === 'hidden') {
        logoEl.style.visibility = 'hidden';
        logo2El.style.visibility = 'hidden';
        thanosGifEl.style.visibility = 'hidden';
        turnTEl.style.visibility = 'hidden';
        avengersGifEl.style.visibility = 'hidden';
        turnAEl.style.visibility = 'hidden';
        instructEl.style.visibility = 'visible';   
    } else if (turn === 1) {
        logoEl.style.visibility = 'visible';
        logo2El.style.visibility = 'visible';
        instructEl.style.visibility = 'hidden';
        thanosGifEl.style.visibility = 'hidden';
        turnTEl.style.visibility = 'hidden';
        avengersGifEl.style.visibility = 'visible';
        turnAEl.style.visibility = 'visible';
    } else if (turn === -1) {
        logoEl.style.visibility = 'visible';
        logo2El.style.visibility = 'visible';
        instructEl.style.visibility = 'hidden';
        thanosGifEl.style.visibility = 'visible';
        turnTEl.style.visibility = 'visible';
        avengersGifEl.style.visibility = 'hidden';
        turnAEl.style.visibility = 'hidden';
    }
}

function handleFirstMove (evt) {
    let currPos = POSITION[evt.target.id];
    let stones = board[currPos];
    board[currPos] = 0;
    if (stones === 0 || 
        (turn === 1 && currPos >= 7) ||
        (turn === -1 && currPos <= 6) ||
        (evt.target.tagName !== 'DIV') ||
        (winner === 1) ||
        (winner === -1)
        )
        return;
    currPos += 1;
    while (stones > 0) {
        if(currPos !== 6 && currPos !== 13) {
            board[currPos] += 1;
            stones--;
            currPos++;
        } else if (currPos === 6 && turn === 1) {
            board[currPos] += 1;
            stones--;
            currPos++;
        } else if (currPos === 6 && turn !== 1) {
            currPos++;
        } else if (currPos === 13 && turn === -1) {
            board[currPos - 1] = 0;
            board[currPos] += 1;
            stones--;
            currPos++;
        } else if (currPos === 13 && turn !== -1) {
            currPos++;
        } 
        if(currPos === 14) {
            currPos = 0;
        }
        if(stones === 0 && currPos !== 13 && currPos !== 6) {
            if (turn === 1 && currPos < 6) {
                currPos = currPos - 1;
                checkAvengersSide(currPos)
            } else if (turn === -1 && currPos > 6) {
                currPos = currPos - 1;
                checkThanosSide(currPos)
            }
        }
    }
    if (turn === 1 && currPos === 7) {
        renderBoard()
    } else if (turn === -1 && currPos === 0) {
        renderBoard();
    } else {
        turn *= -1;
        renderBoard();
    }
    winner = getWinner();
    render();
}

function getWinner() {
    return checkAvengersRow() || checkThanosRow();
}

function checkAvengersRow() {
    let sum = 0;
    for (let i = 0; i < 6; i++) {
        sum += board[i];
    }
    if (sum === 0 && board[6] > board[13]) {
        winner = 1;
    } else if (sum === 0 && board[6] < board[13]) {
        winner = -1;
    };
    return winner;
}

function checkThanosRow() {
    let sum = 0;
    for (let i = 6; i < 13; i++) {
        sum += board[i];
    }
    if (sum === 0 && board[6] > board[13]) {
        winner = 1;
    } else if (sum === 0 && board[6] < board[13]) {
        winner = -1;
    };
    return winner;
}

function checkAvengersSide(currPos) {
    // checking for zero on avengers side
    if (board[currPos] === 1) {
        if (currPos === 0 && board[12] > 0) {
            board[currPos] = 0;
            board[6] += 1;
            board[6] += board[12];
            board[12] = 0;
        } else if (currPos === 1 && board[11] > 0) {
            board[currPos] = 0;
            board[6] += 1;
            board[6] += board[11];
            board[11] = 0;
        } else if (currPos === 2 && board[10] > 0) {
            board[currPos] = 0;
            board[6] += 1;
            board[6] += board[10];
            board[10] = 0;
        } else if (currPos === 3 && board[9] > 0) {
            board[currPos] = 0;
            board[6] += 1;
            board[6] += board[9];
            board[9] = 0;
        } else if (currPos === 4 && board[8] > 0) {
            board[currPos] = 0;
            board[6] += 1;
            board[6] += board[8];
            board[8] = 0;
        } else if (currPos === 5 && board[7] > 0) {
            board[currPos] = 0;
            board[6] += 1;
            board[6] += board[7];
            board[7] = 0;
        }
    }
}

function checkThanosSide(currPos) {
    //checking for zero on thanos side
    if (board[currPos] === 1) {
        if (currPos === 7 && board[5] > 0) {
            board[currPos] = 0;
            board[13] += 1;
            board[13] += board[5];
            board[5] = 0;
        } else if (currPos === 8 && board[4] > 0) {
            board[currPos] = 0;
            board[13] += 1;
            board[13] += board[4];
            board[4] = 0;
        } else if (currPos === 9 && board[3] > 0) {
            board[currPos] = 0;
            board[13] += 1;
            board[13] += board[3];
            board[3] = 0;
        } else if (currPos === 10 && board[2] > 0) {
            board[currPos] = 0;
            board[13] += 1;
            board[13] += board[2];
            board[2] = 0;
        } else if (currPos === 11 && board[1] > 0) {
            board[currPos] = 0;
            board[13] += 1;
            board[13] += board[1];
            board[1] = 0;
        } else if (currPos === 12 && board[0] > 0) {
            board[currPos] = 0;
            board[13] += 1;
            board[13] += board[0];
            board[0] = 0;
        }
    }
}