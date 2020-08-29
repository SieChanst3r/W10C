function clearSelection(returnAndRemove) {
    Cookies.remove('selection');
    window.open("index.html", "_self");
}

// userHealth.innerHTML = userHealth;
// enemyHealth.innerHTML = enemyHealth;



var userHealth = document.getElementById('userHP')
var enemyHealth = document.getElementById('enemyHP')

var userSelection = Cookies.get('selection');
var pokemon = Cookies.get('pokemon')

var userHealth = 100;
var enemyHealth = 100;

function attackOne() {
    userHealth = userHealth - 25;
    enemyHealth = enemyHealth - 30;
    userHealth.innerHTML = userHealth;
    enemyHealth.innerHTML = enemyHealth;
}

function attackTwo() {
    userHealth = userHealth - 30;
    enemyHealth = enemyHealth - 15;
    userHealth.innerHTML = userHealth;
    enemyHealth.innerHTML = enemyHealth;
}

function attackThree() {
    userHealth = userHealth - 15;
    enemyHealth = enemyHealth - 34;
    userHealth.innerHTML = userHealth;
    enemyHealth.innerHTML = enemyHealth;
}

function attackFour() {
    userHealth = userHealth - 23;
    enemyHealth = enemyHealth - 15;
    userHealth.innerHTML = userHealth;
    enemyHealth.innerHTML = enemyHealth;
}

if (userSelection == 'Grookey') {
    document.getElementById('userImage').innerHTML = "<img src='https://vignette.wikia.nocookie.net/pokemon/images/9/93/810Grookey.png/revision/latest?cb=20200627181002'>";
    document.getElementById('userPokemon').innerHTML = "<h2> Grookey</h2>"
} else if (userSelection == 'Emolga') {
    document.getElementById('userImage').innerHTML = "<img src='https://cdn.bulbagarden.net/upload/thumb/b/b4/587Emolga.png/1200px-587Emolga.png'>";;
    document.getElementById('userPokemon').innerHTML = "<h2> Emolga </h2>"
} else if (userSelection == 'Volpix') {
    document.getElementById('userImage').innerHTML = "<img src='https://img.pokemondb.net/artwork/large/vulpix.jpg'>";;
    document.getElementById('userPokemon').innerHTML = "<h2> Volpix</h2>"
} else {
    document.getElementById('userImage').innerHTML = "<p> Invalid Choice! </p>";
}