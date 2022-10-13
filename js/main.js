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

let stonesEl = document.getElementsByClassName('stones').textContent;

/*----- event listeners -----*/

document.getElementById('avengersPlanets').addEventListener('click', handleFirstMove);
document.getElementById('thanosPlanets').addEventListener('click', handleFirstMove);
document.getElementById('help').addEventListener('click', handleInstruct);
document.getElementById('playAgain').addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
    board = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0]; // board
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
        document.getElementById('avengersGif').style.visibility = 'visible';
        document.getElementById('turnA').style.visibility = 'visible';
        document.getElementById('avengersGif').style.marginLeft = 'auto';
        document.getElementById('turnA').style.marginLeft = 'auto';
        document.getElementById('turnA').innerHTML = 'Avengers Win!';
        document.getElementById('thanosGif').style.visibility = 'hidden';
        document.getElementById('turnT').style.visibility = 'hidden';
        document.getElementById('logo').style.opacity = '15%';
        document.getElementById('logo2').style.opacity = '15%';
        
    } else if (winner === -1) {
        document.getElementById('thanosGif').style.visibility = 'visible';
        document.getElementById('turnT').style.visibility = 'visible';
        document.getElementById('thanosGif').style.marginLeft = '420px';
        document.getElementById('turnT').style.marginLeft = '450px';
        document.getElementById('turnT').innerHTML = 'Thanos Wins';
        document.getElementById('avengersGif').style.visibility = 'hidden';
        document.getElementById('turnA').style.visibility = 'hidden';
        document.getElementById('logo').style.opacity = '15%';
        document.getElementById('logo2').style.opacity = '15%';
    }
}

function renderBoard() {
    // Iterate over the array
    board.forEach(function(num, Idx) {
      // Iterate over the cells in the current collumn (colArr)
        const cellId = `${boardIds[Idx]}`;
        const cellEl = document.getElementById(cellId);
        // cellEl.style.color = COLORS[cellVal];
        // cellEl.innerText = PLAYERS[cellVal];
        cellEl.innerHTML = num;
    });
    if(turn === 1) {
        document.getElementById('thanosGif').style.visibility = 'hidden';
        document.getElementById('turnT').style.visibility = 'hidden';
        document.getElementById('avengersGif').style.visibility = 'visible';
        document.getElementById('turnA').style.visibility = 'visible';
        document.getElementById('turnA').innerHTML = 'Avengers Turn!';
    } else {
        document.getElementById('avengersGif').style.visibility = 'hidden';
        document.getElementById('turnA').style.visibility = 'hidden';
        document.getElementById('thanosGif').style.visibility = 'visible';
        document.getElementById('turnT').style.visibility = 'visible';
        document.getElementById('turnT').innerHTML = 'Thanos Turn!';

    }
}

function handleInstruct(evt) {
    evt.preventDefault();
    if (document.getElementById('instructions').style.visibility === 'hidden') {
        document.getElementById('logo').style.visibility = 'hidden';
        document.getElementById('logo2').style.visibility = 'hidden';
        document.getElementById('thanosGif').style.visibility = 'hidden';
        document.getElementById('turnT').style.visibility = 'hidden';
        document.getElementById('avengersGif').style.visibility = 'hidden';
        document.getElementById('turnA').style.visibility = 'hidden';
        document.getElementById('instructions').style.visibility = 'visible';   
    } else if (turn === 1) {
        document.getElementById('logo').style.visibility = 'visible';
        document.getElementById('logo2').style.visibility = 'visible';
        document.getElementById('instructions').style.visibility = 'hidden';
        document.getElementById('thanosGif').style.visibility = 'hidden';
        document.getElementById('turnT').style.visibility = 'hidden';
        document.getElementById('avengersGif').style.visibility = 'visible';
        document.getElementById('turnA').style.visibility = 'visible';
    } else if (turn === -1) {
        document.getElementById('logo').style.visibility = 'visible';
        document.getElementById('logo2').style.visibility = 'visible';
        document.getElementById('instructions').style.visibility = 'hidden';
        document.getElementById('thanosGif').style.visibility = 'visible';
        document.getElementById('turnT').style.visibility = 'visible';
        document.getElementById('avengersGif').style.visibility = 'hidden';
        document.getElementById('turnA').style.visibility = 'hidden';
    }
}

// function rndNum (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//     console.log(rndNum)
// }

// function pickRandomStones() {
    //     let randNum = rndNum(1, 6);
    //     const randomStone = new Array();
    //     return document.getElementById("thanosPlanets").innerHTML = '<img src="'+randomStone[randNum]+'" />';
    // } 

function handleFirstMove (evt) {
    let currPos = POSITION[evt.target.id];
    let stones = board[currPos];
    board[currPos] = 0;
    console.log('turn/currPos:', turn, '/', currPos);
    // console.log('tagname', evt.target.tagName, 'stones', stones, 'currPos', currPos);
    if (stones === 0 || 
        (turn === 1 && currPos >= 7) ||
        (turn === -1 && currPos <= 6) ||
        (evt.target.tagName !== 'DIV') ||
        (winner === 1) ||
        (winner === -1)
        )
        return;
    currPos += 1;
    // console.log('outside of while loop currPos + value/ checkZero + value: ', currPos, '+',board[currPos], '/', checkZero, '+', board[checkZero]);
    while (stones > 0) {
        // sleep();
        if(currPos !== 6 && currPos !== 13) {
            board[currPos] += 1;
            stones--;
            currPos++;
            console.log(board);
            console.log('currPos :', currPos);
            // console.log('boardValue/currPos1/checkZero/boardValue[checkZero]: ', board[currPos], '/', currPos, '/', checkZero, '/', board[checkZero]);
        } else if (currPos === 6 && turn === 1) {
            board[currPos] += 1;
            stones--;
            currPos++;
            // console.log('board/currPos2: ', board[currPos]);
        } else if (currPos === 6 && turn !== 1) {
            currPos++;
            // console.log('board/currPos3: ', board[currPos]);
        } else if (currPos === 13 && turn === -1) {
            board[currPos] += 1;
            stones--;
            currPos++;
            // console.log('board/currPos4: ', board[currPos]);
        } else if (currPos === 13 && turn !== -1) {
            currPos++;
            // console.log('board/currPos5: ', board[currPos]);
        } 
        if(currPos === 14) {
            currPos = 0;
        }
        if(stones === 0 && currPos !== 13 && currPos !== 6) {
            console.log('stones:', stones);
            if (turn === 1 && currPos < 6) {
                currPos = currPos - 1;
                checkAvengersSide(currPos)
            } else if (turn === -1 && currPos > 6) {
                currPos = currPos - 1;
                checkThanosSide(currPos)
            } 
        }
    }
    console.log('after while currPos',currPos);
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
                console.log('this is a zero spot for avengers');
                console.log('board/currPos6: ', board[currPos], '/', currPos);
                board[currPos] = 0;
                if (currPos === 0 && board[12] > 0) {
                    board[6] += 1;
                    board[6] += board[12];
                    board[12] = 0;
                } else if (currPos === 1 && board[11] > 0) {
                    board[6] += 1;
                    board[6] += board[11];
                    board[11] = 0;
                } else if (currPos === 2 && board[10] > 0) {
                    board[6] += 1;
                    board[6] += board[10];
                    board[10] = 0;
                } else if (currPos === 3 && board[9] > 0) {
                    board[6] += 1;
                    board[6] += board[9];
                    board[9] = 0;
                } else if (currPos === 4 && board[8] > 0) {
                    board[6] += 1;
                    board[6] += board[8];
                    board[8] = 0;
                } else if (currPos === 5 && board[7] > 0) {
                    board[6] += 1;
                    board[6] += board[7];
                    board[7] = 0;
                }
            }
}

function checkThanosSide(currPos) {
        //checking for zero on thanos side
        if (board[currPos] === 1) {
            console.log('this is a zero spot for thanos');
            console.log('board/currPos6: ', board[currPos], '/', currPos);
            board[currPos] = 0;
            if (currPos === 7 && board[5] > 0) {
                board[13] += 1;
                board[13] += board[5];
                board[5] = 0;
            } else if (currPos === 8 && board[4] > 0) {
                board[13] += 1;
                board[13] += board[4];
                board[4] = 0;
            } else if (currPos === 9 && board[3] > 0) {
                board[13] += 1;
                board[13] += board[3];
                board[3] = 0;
            } else if (currPos === 10 && board[2] > 0) {
                board[13] += 1;
                board[13] += board[2];
                board[2] = 0;
            } else if (currPos === 11 && board[1] > 0) {
                board[13] += 1;
                board[13] += board[1];
                board[1] = 0;
            } else if (currPos === 12 && board[0] > 0) {
                board[13] += 1;
                board[13] += board[0];
                board[0] = 0;
            }
        }
}


// function sleep() {
//     function displayText(str) {
//     console.log(str)
//  }
//  var i = 0;
 
//  var a = [12];
 
//  function timedLoop() {
//  setTimeout(function () {
//      displayText(a[i]);
//      i++;
//      if(i < a.length) {
//          timedLoop();
//      }
//  }, 2000)
//  }
 
//  timedLoop();
// }