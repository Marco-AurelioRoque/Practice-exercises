var asideMenu = document.querySelector("aside")


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