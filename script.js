var options = [
    "Programmer", "Freelancer", "Mathematics, Operational Research and Statistics Graduate", "Artificial Intelligence Post-Graduate"
];

var interval = 5000;
var occupation = document.getElementById('occupation');
//$("#occupation").hide() 
console.log(occupation)
// var occupation = document.getElementsByClassName('occupation')
// var occupation = $(".occupation");
var currentIndex = 0;



function doIt() {
    //setTimeout(doIt, interval);
    //$("#occupation").fadeOut(2500);
    changer = options[currentIndex];
    currentIndex = (currentIndex + 1) % options.length;
    $('#occupation').html(changer)
    //occupation.innerHTML = changer;
    //$("#occupation").fadeIn(2500);
    //console.log(occupation);
}

function cycle() {
    setTimeout(cycle, interval);    
    doIt();
}

cycle();

/* 
Now look at slideshow animations...
*/

var slideInd = 1;
showSlides(slideInd);

/* Prev/Next control mechanism */

function plusSlides(n) {
    showSlides(slideInd += n)
}

function thisSlide(n) {
    showSlides(slideInd = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide")
    if (n > slides.length) {slideInd = 1}
    if (n < 1) {slideInd = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideInd-1].style.display = "block";
}

var img1 = getElementById("img1")
