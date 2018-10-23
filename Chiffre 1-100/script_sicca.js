/*---Logiciel qui tire un chiffre entre 1 et 100--*/

console.clear; // J'efface la console
var nbrMystere;
var nbrJoueur;
var nbrCoup = 1;
var i;

// tire une valeur au hasard

function hasard(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
nbrMystere = hasard(1, 100);
console.log(nbrMystere);





// Demande un chiffre entre 1 et 100 avec prompt

for (i = 0; i <= 5; i++, i == 5) {
    while (nbrJoueur != nbrMystere, nbrCoup <= 5) {
        nbrJoueur = parseInt(prompt("Donner moi un chiffre entre 1 et 100 ?"));
        console.log("Coups :", nbrCoup);
        nbrCoup++;
        if (nbrJoueur < nbrMystere) {
            console.log("C'est plus !");
        } else if (nbrJoueur > nbrMystere) {
            console.log("C'est moins !");
        } else {
            console.log("Bravo !");
        }
    }
    console.log("Perdu !");
}













// while (nbrJoueur != nbrMystere) {

//     if (nbrJoueur < nbrMystere) {
//         nbrJoueur = parseInt(prompt("Trop petit !"));
//     } else if (nbrJoueur < nbrMystere) {
//         nbrJoueur = parseInt(prompt("Trop grand !"));
//     } else(nbrJoueur = nbrMystere) {
//         console.log("Bravo!")
//     }
// }



// if (nbrJoueur < nbrMystere) {
//     nbrJoueur = parseInt(prompt(" Trop petit !"));
// } else if (nbrJoueur > nbrMystere) {
//     nbrJoueur = parseInt(prompt(" Trop grand !"));
// }

// for (i = 0; i <= 5; i = i + 1) {
//     console.log(i);
//     if (i == 3) {
//         break;
//     }

//     // msg si true "bravo"
//     if (nbrJoueur = nbrMystere) {
//         console.log("Bravo!")
//     }