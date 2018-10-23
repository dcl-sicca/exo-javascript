var isActivated = false;
// taille = getComputedStyle(sicca).width;
var taille = '250px';


function bouton1() {
    sicca.style.backgroundColor = 'yellow';

}

function bouton2() {
    sicca.style.backgroundColor = 'blue';
}

function bouton3() {
    sicca.style.width = '300px';
    sicca.style.height = '300px';
    console.log(taille);
}

function bouton4() {
    if (taille < '500px') {
        sicca.style.backgroundColor = "green";
        sicca.style.width = taille;
        sicca.style.height = taille;
        taille = taille + '50px';
        // isActivated = true;
    } else {
        sicca.style.backgroundColor = "purple";
        sicca.style.width = "250px";
        sicca.style.height = "250px";
        // isActivated = false;
    }
}





function bouton5() {
    // sicca.style.backgroundColor = 'white';
    sicca.style.visibility = 'hidden';
}


// function bouton6() {
//     sicca.style.width = '250px';
//     sicca.style.height = '250px';
//     sicca.style.backgroundColor = 'deeppink';
//     sicca.style.visibility = 'initial';

// }

// function bouton6() {
//     document.getElementById("sicca").innerHTML = "";
// }

// Fonction F5
function bouton6(sicca) {
    location.reload()
}