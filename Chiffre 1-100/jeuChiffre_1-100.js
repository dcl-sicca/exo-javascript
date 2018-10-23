/*---Logiciel qui tire un chiffre entre 1 et 100--*/

console.clear; // J'efface la console
var nbrHasard;
var chiffreHasard;

// tire une valeur au hasard

function hasard(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
nbrHasard = hasard(1, 100);
console.log(nbrHasard);

// Demande un chiffre entre 1 et 100 avec prompt

chiffreHasard = parseInt(prompt("Donner moi un chiffre entre 1 et 100 ?"));

// msg si false "essai encore"

while (chiffreHasard != nbrHasard) {
    chiffreHasard = parseInt(prompt("Essai encore !"));
}

// msg si true "bravo"
if (chiffreHasard = nbrHasard) {
    console.log("Bravo!")
}