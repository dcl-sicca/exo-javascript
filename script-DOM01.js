var rose = document.getElementById("rose");
var isActivated = false;

rose.addEventListener("click",
    function() {
        if (isActivated === false) {
            rose.style.backgroundColor = "red";
            rose.style.width = "500px";
            rose.style.height = "500px";
            isActivated = true;
        } else {
            rose.style.backgroundColor = "deeppink";
            rose.style.width = "250px";
            rose.style.height = "250px";
            isActivated = false;
        }
    }
);