 if((!empty( $_SERVER['HTTP_X_FORWARDED_HOST'])) || (!empty( $_SERVER['HTTP_X_FORWARDED_FOR'])) ) {
 	$_SERVER['HTTP_HOST'] = $_SERVER['HTTP_X_FORWARDED_HOST'];
 	$_SERVER['HTTPS'] = 'on';
 }
// Celender
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var nextday = date.getDate() + 1;

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
if (nextday < 10) nextday = "0" + nextday;
var today = year + "-" + month + "-" + day;
var today2 = year + "-" + month + "-" + nextday;
document.getElementById("theDate").value = today;
document.getElementById("theDate2").value = today2;

function nextDay() {
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    document.getElementById("theDate").value = today;
}

function prevDay() {
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    document.getElementById("theDate").value = today;

}

function prevDay2() {
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    document.getElementById("theDate2").value = today;

}

function nextDay2() {
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    document.getElementById("theDate2").value = today;
}
// unchecked
$('input[type="radio"]').mousedown(function() {

    if (this.checked) {

        $(this).mouseup(function() {

            var radio = this;

            setTimeout(function() {
                radio.checked = false;
            }, 5);

            $(this).unbind('mouseup');
        });
    }
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
$('.booking__convert').mousedown('click', function() {
    var $first = $('.booking__form').find('.subbox').first();
    var $last = $('.booking__form').find('.subbox').last();

    $('.booking__convert').after($first);
    $('.booking__convert').before($last);
});
