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
showSlides2(slideInd);

/* Prev/Next control mechanism */

function plusSlides(n) {
    showSlides(slideInd += n)
}

function thisSlide(n) {
    showSlides(slideInd = n)
}

function plusSlides2(n) {
    showSlides2(slideInd += n)
}

function thisSlide2(n) {
    showSlides2(slideInd = n)
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

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("slide2")
    if (n > slides.length) {slideInd = 1}
    if (n < 1) {slideInd = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideInd-1].style.display = "block";
}

var img1 = document.getElementById("img1")

$(document).ready(function(){
  $(".slide").hover(function(){
    if ($("#img1").css("display") == "block"){
    $("#detail-1").css("display", "block");
    $("#priority-1").css("display", "block");
    $(".projectname").css("top", "20%");}
    if ($("#img2").css("display") == "block"){
    $("#detail-2").css("display", "block");
    $("#priority-2").css("display", "block");
    $(".projectname").css("top", "20%");}
    if ($("#img3").css("display") == "block"){
    $("#detail-3").css("display", "block");
    $("#priority-3").css("display", "block");
    $(".projectname").css("top", "20%");}
    if ($("#img4").css("display") == "block"){
    $("#detail-4").css("display", "block");
    $("#priority-4").css("display", "block");
    $(".projectname").css("top", "20%");}
    }, function(){
    if ($("#img1").css("display") == "block"){
    $("#detail-1").css("display", "none");
    $("#priority-1").css("display", "none");
    $(".projectname").css("top", "50%");}
    if ($("#img2").css("display") == "block"){
    $("#detail-2").css("display", "none");
    $("#priority-2").css("display", "none");
    $(".projectname").css("top", "50%");}
    if ($("#img3").css("display") == "block"){
    $("#detail-3").css("display", "none");
    $("#priority-3").css("display", "none");
    $(".projectname").css("top", "50%");}
    if ($("#img4").css("display") == "block"){
    $("#detail-4").css("display", "none");
    $("#priority-4").css("display", "none");
    $(".projectname").css("top", "50%");}
  });
});

$(document).ready(function(){
  $(".slide2").hover(function(){
    if ($("#img01").css("display") == "block"){
    $("#detail-01").css("display", "block");
    $(".projectname2").css("top", "20%");}
    if ($("#img02").css("display") == "block"){
    $("#detail-02").css("display", "block");
    $(".projectname2").css("top", "20%");}
    if ($("#img03").css("display") == "block"){
    $("#detail-03").css("display", "block");
    $(".projectname2").css("top", "20%");}
    if ($("#img04").css("display") == "block"){
    $("#detail-04").css("display", "block");
    $(".projectname2").css("top", "20%");}
    if ($("#img05").css("display") == "block"){
    $("#detail-05").css("display", "block");
    $(".projectname2").css("top", "20%");}
    if ($("#img06").css("display") == "block"){
    $("#detail-06").css("display", "block");
    $(".projectname2").css("top", "20%");}
    }, function(){
    if ($("#img01").css("display") == "block"){
    $("#detail-01").css("display", "none");
    $(".projectname2").css("top", "50%");}
    if ($("#img02").css("display") == "block"){
    $("#detail-02").css("display", "none");
    $(".projectname2").css("top", "50%");}
    if ($("#img03").css("display") == "block"){
    $("#detail-03").css("display", "none");
    $(".projectname2").css("top", "50%");}
    if ($("#img04").css("display") == "block"){
    $("#detail-04").css("display", "none");
    $(".projectname2").css("top", "50%");}
    if ($("#img05").css("display") == "block"){
    $("#detail-05").css("display", "none");
    $(".projectname2").css("top", "50%");}
    if ($("#img06").css("display") == "block"){
    $("#detail-06").css("display", "none");
    $(".projectname2").css("top", "50%");}
  });
});
