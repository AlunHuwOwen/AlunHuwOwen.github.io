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
    console.log(occupation);
}

function cycle() {
    setTimeout(cycle, interval);    
    doIt();
}

cycle();
