// var selectedPokemon = Cookies.get("selection");
// var selection = document.getElementById("userSelection");
// selection.innerHTML = selectedPokemon

function clearSelection() {
    Cookies.remove('selection');
    window.open("index.html", "_self");
}

var userSelection = Cookies.get('selection');

if (userSelection == 'Grookey') {
    document.getElementById('userSelection').innerHTML = "<p> Grookey </p>";
} else if (userSelection == 'Emolga') {
    document.getElementById('userSelection').innerHTML = "<p> Emolga </p>";
} else if (userSelection == 'Volpix') {
    document.getElementById('userSelection').innerHTML = "<p> Volpix </p>";
} else {
    document.getElementById('userSelection').innerHTML = "<p> Invalid Choice! </p>";
}