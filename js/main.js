/*----- constants -----*/
// let randomStone[0] = "https://imgur.com/hBa9Y56.png";
// let randomStone[1] = "https://imgur.com/xoOWF8u.png";
// let randomStone[2] = "https://imgur.com/FbSPrUb.png";
// let randomStone[3] = "https://imgur.com/cm26GoN.png";
// let randomStone[4] = "https://imgur.com/zmHX8z2.png";
// let randomStone[5] = "https://imgur.com/XQcilwv.png";
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

let board, turn, winner;


/*----- cached element references -----*/

let stonesEl = document.getElementsByClassName('stones').textContent;
// let vormirStonesEl = document.getElementById('stonesV').textContent;
// let sakaarStonesEl = document.getElementById('stonesS').textContent;
// console.log(sakaarStonesEl);
// let knowhereStonesEl = document.getElementById('stonesK').textContent;
// let xandarStonesEl = document.getElementById('stonesX').textContent;
// let asgardStonesEl = document.getElementById('stonesA').textContent;
// let earthStonesEl = document.getElementById('stonesE').textContent;


/*----- event listeners -----*/

document.getElementById('avengersPlanets').addEventListener('click', handleFirstMove);
document.getElementById('thanosPlanets').addEventListener('click', handleFirstMove);
document.getElementById('help').addEventListener('click', handleInstruct);

/*----- functions -----*/
init();

function init() {
    board = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0]; // board
    turn = 1;
    winner = null;
    boardIds = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
    render();
  }

function render() {
    renderBoard();
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
  }

function handleInstruct(evt) {
    evt.preventDefault();
    if (document.getElementById('instructions').style.visibility === 'hidden') {
        document.getElementById('logo').style.visibility = 'hidden';
        document.getElementById('logo2').style.visibility = 'hidden';
        document.getElementById('instructions').style.visibility = 'visible';   
    } else {
        document.getElementById('logo').style.visibility = 'visible';
        document.getElementById('logo2').style.visibility = 'visible';
        document.getElementById('instructions').style.visibility = 'hidden';
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
    console.log('currentPos/Stones ', currPos, stones);
    if (stones === 0) return;
    currPos += 1;
    while (stones > 0) {
        console.log('hello: ', stones)
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
            board[currPos] += 1;
            stones--;
            currPos++;
        } else if (currPos === 13 && turn !== -1) {
            currPos++;
        }
            if(currPos === 14) {
                currPos = 0;
            }
    };
    renderBoard();
}

// evt.target.textContent = '0';

// sakaarStonesEl = sakaarStonesEl + 1;
// knowhereStonesEl = knowhereStonesEl + 1;
// xandarStonesEl = xandarStonesEl + 1;

