function openMusic() {
    document.querySelector("aside").style.display = "block"
}

function closeMusic() {
    document.querySelector("aside").style.display = "none"
}

var timeBar = document.querySelector(".barTime")
var intervalo = 30000
function start() {
    timeBar.style.display = "block"
    
    setTimeout(() => {
    var sound = new Audio('../musicas/timer.mp3')
    sound.play() 
    }, intervalo);
}

function reset() {
    timeBar.style.display = "none"
    
    var sound = new Audio('../musicas/timer.mp3')
    sound.pause() 
}

//Musicas
var hayloft = document.querySelector("#hayloft")
var wanna = document.querySelector("#wanna-be")
var levitating = document.querySelector("#levitating")
var infinity = document.querySelector("#infinit")
var alive = document.querySelector("#aliv")
var remember = document.querySelector("#rfc")
var chandelier = document.querySelector("#chandelier")
var genius = document.querySelector("#genius")

function addMusicHay() {
    levitating.style.display = "none"
    infinity.style.display = "none"
    alive.style.display = "none"
    remember.style.display = "none"
    chandelier.style.display = "none"
    genius.style.display = "none"
    wanna.style.display = "none"
    hayloft.style.display = "block"
}

function addMusicWanna() {
    levitating.style.display = "none"
    infinity.style.display = "none"
    alive.style.display = "none"
    remember.style.display = "none"
    chandelier.style.display = "none"
    genius.style.display = "none"
    wanna.style.display = "block"
    hayloft.style.display = "none"
}

function addMusicLev() {
    infinity.style.display = "none"
    alive.style.display = "none"
    remember.style.display = "none"
    chandelier.style.display = "none"
    genius.style.display = "none"
    wanna.style.display = "none"
    hayloft.style.display = "none"
    levitating.style.display = "block"
}

function infi(){
    infinity.style.display = "block"
    alive.style.display = "none"
    remember.style.display = "none"
    chandelier.style.display = "none"
    genius.style.display = "none"
    wanna.style.display = "none"
    hayloft.style.display = "none"
    levitating.style.display = "none"
}

function addMusicAlive() {
    infinity.style.display = "none"
    alive.style.display = "block"
    remember.style.display = "none"
    chandelier.style.display = "none"
    genius.style.display = "none"
    wanna.style.display = "none"
    hayloft.style.display = "none"
    levitating.style.display = "none"
}

function rememberCen() {
    infinity.style.display = "none"
    alive.style.display = "none"
    remember.style.display = "block"
    chandelier.style.display = "none"
    genius.style.display = "none"
    wanna.style.display = "none"
    hayloft.style.display = "none"
    levitating.style.display = "none"
}

function chand() {
    infinity.style.display = "none"
    alive.style.display = "none"
    remember.style.display = "none"
    chandelier.style.display = "block"
    genius.style.display = "none"
    wanna.style.display = "none"
    hayloft.style.display = "none"
    levitating.style.display = "none"
}

function gen() {
    infinity.style.display = "none"
    alive.style.display = "none"
    remember.style.display = "none"
    chandelier.style.display = "none"
    genius.style.display = "block"
    wanna.style.display = "none"
    hayloft.style.display = "none"
    levitating.style.display = "none"
}