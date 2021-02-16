var plaatjes = [1,2,3,4,5,6,7,8,9];
var teller = 0;
var slideholder = document.getElementById("slideholder")
slideholder.style.backgroundImage = "url('imgEeveelutions/eevee9.png')";

slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('imgEeveelutions/eevee" + getEevee() + ".png')";
});

function getEevee() {
    console.log(teller);
    return teller;
}