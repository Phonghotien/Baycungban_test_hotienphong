//swap
$('.booking__convert').mousedown('click', function() {
    var $first = $('.booking__form').find('.subbox').first();
    var $last = $('.booking__form').find('.subbox').last();

    $('.booking__convert').after($first);
    $('.booking__convert').before($last);
});
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
