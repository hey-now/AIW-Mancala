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

const avengersPlanetEl = document.getElementById('avengersPlanets');
const thanosPlanetsEl = document.getElementById('thanosPlanets');
let vormirStonesEl = document.getElementById('stonesV').textContent;
let sakaarStonesEl = document.getElementById('stonesS').textContent;
console.log(sakaarStonesEl);
let knowhereStonesEl = document.getElementById('stonesK').textContent;
let xandarStonesEl = document.getElementById('stonesX').textContent;
let asgardStonesEl = document.getElementById('stonesA').textContent;
let earthStonesEl = document.getElementById('stonesE').textContent;

let evtTarget = avengersPlanetEl.addEventListener('click', handlePlayMove);

/*----- event listeners -----*/

document.getElementById('help').addEventListener('click', handleInstruct);

/*----- functions -----*/
initialize();

function initialize() {
    let stones = 4;
    document.getElementsByClassName('stones').innerText = stones;
    render();
}

function render() {
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
    
function handlePlayMove (evt) {
    console.log(evt);
if(evt.path[0].id === 'stonesV') {
    let stones = evt.path[0].innerText
    for (let i = 0; i <= stones; i++) {
    console.log(i);
    sakaarStonesEl + 1;
    knowhereStonesEl + 1;
    xandarStonesEl + 1;
    asgardStonesEl + 1;
    earthStonesEl + 1;
        }
    }
    return;
}
// evt.target.textContent = '0';

// sakaarStonesEl = sakaarStonesEl + 1;
// knowhereStonesEl = knowhereStonesEl + 1;
// xandarStonesEl = xandarStonesEl + 1;

