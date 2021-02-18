pics = document.getElementById("pics");
createPicsHolders()
createEeveeImages()

function createPicsHolders () {
    for(var i = 0; i < 9; i++) {
    pictureHolder = document.createElement("div");
    pictureHolder.className = "picture-holder";
    pictureHolder.id = "picture-holder-" + i;
    pics.appendChild(pictureHolder);
    }
}

function createEeveeImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        eeveePlaatje = document.createElement("img");
        eeveePlaatje.src = "imgSmallerEeveelutions/SmallerEeveelution" + (i + 1) + ".png";
        eeveePlaatje.id = (i + 1);
        eeveePlaatje.addEventListener("click", function() {
            maakFavoriet(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(eeveePlaatje);
    }
}

function maakFavoriet(id) {
    notsofavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('imgheart/eeveeheart.png')";
}

