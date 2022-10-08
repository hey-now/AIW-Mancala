document.getElementById('help').addEventListener('click', handleInstruct);

function handleInstruct(evt) {
    evt.preventDefault();
    const logoEl = document.getElementById('logo').style.visibility = 'hidden';
    document.getElementById('logo2').style.visibility = 'hidden';
    document.getElementById('instructions').style.visibility = 'visible';
    console.log(logoEl);
}