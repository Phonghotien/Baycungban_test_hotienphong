// menu
const menu = document.querySelector(".header__nav");
const menuButton = document.getElementById("navbar__icons");
const overlay = document.querySelector("#overlay")


menuButton.addEventListener('click', () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show")
});
overlay.addEventListener('click', () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show")
});