document.getElementById('help').addEventListener('click', handleInstruct);

handleInstruct(evt) {
    document.getElementById('logo').style.visibility('hidden');
    document.getElementById('logo2').style.visibility('hidden');
    document.getElementById('instructions').style.visibility('visible');
}