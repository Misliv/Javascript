pics = document.getElementById("pics");
createPicsHolders()
createEeveeImages()

function createPicsHolders () {
    for(var i = 0; i < 9; i++) {
    pictureHolder = document.createElement("div")
    pictureHolder.className = "eeveepicture";
    pictureHolder.id = "picture-holder-" + i;
    pics.appendChild(pictureHolder);
    }
}

function createEeveeImages() {
    pictureHolders = document.getElementsByClassName("eeveepicture");
}