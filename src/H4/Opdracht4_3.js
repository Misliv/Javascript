var plaatjes1 = [1,2,3];
var teller1 = 0;
var slideholder1 = document.getElementById("slideholder1")
slideholder1.style.backgroundImage = "url('imgPicrews/top1.png')";

slideholder1.addEventListener("click", function () {
    slideholder1.style.backgroundImage = "url('imgPicrews/top" + getTop() + ".png')";
});

function getTop() {
    if(teller1 >= plaatjes1.length) {
        teller1 = 1
    } else {
        teller1++;
    }
    console.log(teller1);
    return teller1;
}

var plaatjes2 = [1,2,3];
var teller2 = 0;
var slideholder2 = document.getElementById("slideholder2")
slideholder2.style.backgroundImage = "url('imgPicrews/middle1.png')";

slideholder2.addEventListener("click", function () {
    slideholder2.style.backgroundImage = "url('imgPicrews/middle" + getMiddle() + ".png')";
});

function getMiddle() {
    if(teller2 >= plaatjes2.length) {
        teller2 = 1
    } else {
        teller2++;
    }
    console.log(teller2);
    return teller2;
}

var plaatjes3 = [1,2,3];
var teller3 = 0;
var slideholder3 = document.getElementById("slideholder3")
slideholder3.style.backgroundImage = "url('imgPicrews/bottom1.png')";

slideholder3.addEventListener("click", function () {
    slideholder3.style.backgroundImage = "url('imgPicrews/bottom" + getBottom() + ".png')";
});

function getBottom() {
    if(teller3 >= plaatjes3.length) {
        teller3 = 1
    } else {
        teller3++;
    }
    console.log(teller3);
    return teller3;
}