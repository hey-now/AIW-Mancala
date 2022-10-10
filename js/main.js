/*----- constants -----*/
let randomStone[0] = "https://imgur.com/hBa9Y56.png";
let randomStone[1] = "https://imgur.com/xoOWF8u.png";
let randomStone[2] = "https://imgur.com/FbSPrUb.png";
let randomStone[3] = "https://imgur.com/cm26GoN.png";
let randomStone[4] = "https://imgur.com/zmHX8z2.png";
let randomStone[5] = "https://imgur.com/XQcilwv.png";


/*----- app's state (variables) -----*/

let board, turn, winner, stones;

/*----- cached element references -----*/

document.getElementById('avengersPlanets');
document.getElementById('thanosPlanets');


/*----- event listeners -----*/

document.getElementById('help').addEventListener('click', handleInstruct);

/*----- functions -----*/
initialize();

function initialize() {
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

function rndNum (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    console.log(rndNum)
}

function pickRandomStones() {
    let randNum = rndNum(1, 6);
    const randomStone = new Array();
    return document.getElementById("thanosPlanets").innerHTML = '<img src="'+randomStone[randNum]+'" />';
}
