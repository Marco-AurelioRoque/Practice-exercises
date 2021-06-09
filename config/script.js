var asideMenu = document.querySelector("aside")
var exercisesBtn = document.querySelector(".exercises")
var songsBtn = document.querySelector(".songs")
var songsPlay = document.querySelector(".listSongs")
var exercisesPlay = document.querySelector(".listExercises")


function closeMenu(){
    document.querySelector("#closeMenuAside").style.display = "none"
    document.querySelector("#menuOpenner").style.display = "block"
    asideMenu.style.display = "none"
}

function menuToggle() {
    document.querySelector("#closeMenuAside").style.display = "block"
    document.querySelector("#menuOpenner").style.display = "none"
    asideMenu.style.display = "block"
}

function loadPopups() {
    document.querySelector(".popups-wrapper").style.display = "block"
}

function btnContinue() {
    document.querySelector(".popups-wrapper").style.display = "none"
}

function musicasAside(){
    songsPlay.style.display = "block"
    exercisesPlay.style.display = "none"
}

function exerciciosAside() {
    songsPlay.style.display = "none"
    exercisesPlay.style.display = "block"
}