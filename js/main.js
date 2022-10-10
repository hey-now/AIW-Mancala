/*----- constants -----*/
// let randomStone[0] = "https://imgur.com/hBa9Y56.png";
// let randomStone[1] = "https://imgur.com/xoOWF8u.png";
// let randomStone[2] = "https://imgur.com/FbSPrUb.png";
// let randomStone[3] = "https://imgur.com/cm26GoN.png";
// let randomStone[4] = "https://imgur.com/zmHX8z2.png";
// let randomStone[5] = "https://imgur.com/XQcilwv.png";


/*----- app's state (variables) -----*/

let board, turn, winner;


/*----- cached element references -----*/

let stonesEl = document.getElementsByClassName('stones').textContent;
let avengersPlanetEl = document.getElementById('avengersPlanets');
let thanosPlanetsEl = document.getElementById('thanosPlanets');
// let vormirStonesEl = document.getElementById('stonesV').textContent;
// let sakaarStonesEl = document.getElementById('stonesS').textContent;
// console.log(sakaarStonesEl);
// let knowhereStonesEl = document.getElementById('stonesK').textContent;
// let xandarStonesEl = document.getElementById('stonesX').textContent;
// let asgardStonesEl = document.getElementById('stonesA').textContent;
// let earthStonesEl = document.getElementById('stonesE').textContent;

// let evtTarget = avengersPlanetEl.addEventListener('click', handleFirstMove);

/*----- event listeners -----*/

document.getElementById('help').addEventListener('click', handleInstruct);

/*----- functions -----*/
init();

function init() {
    board = [
      [4, 4, 4, 4, 4, 4], // avengers planets
      [0], // avengers collection
      [4, 4, 4, 4, 4, 4], // thanos planets
      [0] // thanos collection
    ];
    turn = 1;
    winner = null;
    boardIds = [
        ['r0c0', 'r0c1', 'r0c2', 'r0c3', 'r0c4', 'r0c5'],
        ['r1c0']
        ['r2c0', 'r2c1', 'r2c2', 'r2c3', 'r2c4', 'r0c5'],
        ['r3c0']
    ];
    render();
  }

function render() {
    // stonesEl = stones;
    renderBoard();
    // console.log(stones);
    // console.log(stonesEl);
}

function renderBoard() {
    // Iterate over the array
    board.forEach(function(colArr, colIdx) {
      // Iterate over the cells in the current collumn (colArr)
      colArr.forEach(function(cellVal, rowIdx) {
        const cellId = `r${colIdx}c${rowIdx}`;
        const cellEl = document.getElementById(cellId);
        // cellEl.style.color = COLORS[cellVal];
        // cellEl.innerText = PLAYERS[cellVal];
        cellEl.innerText = cellVal;
      });
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
    
// function handleFirstMove (evt) {
//     if(evt.path[0].id === 'r0c0') {
//     let stones = evt.path[0].innerText
//     for (let i = 0; i <= stones; i++) {
//         // board[0][0] = 0;
//         // board[0][1] = stones + 1; 
//         // }
//     }
//     return;
// }
// evt.target.textContent = '0';

// sakaarStonesEl = sakaarStonesEl + 1;
// knowhereStonesEl = knowhereStonesEl + 1;
// xandarStonesEl = xandarStonesEl + 1;

