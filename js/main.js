/*----- constants -----*/

/*----- app's state (variables) -----*/

let board, turn, winner;

/*----- cached element references -----*/

/*----- event listeners -----*/

document.getElementById('help').addEventListener('click', handleInstruct);

/*----- functions -----*/

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

