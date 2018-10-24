// Définir ses variables
var nbrHasard;
var chifumiOrdi;
var chifumiJoueur;
var victoire;

// Variable hasard sur multiple de 3
nbrHasard = random(0, 3000);
// Génère un nombre aléatoire.
function random(min, max) {
    // Retourne une valeur entre 0 et 1002.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(nbrHasard); // Affiche la réponse pour tester le programme.

// Défini le Shi-Fu-Mi en fonction du résultat

// --- Si résultat <= 1000 alors Shimumi = parpaing
if (nbrHasard <= 1000) {
    chifumiOrdi = "parpaing";
    // --- Si résultat <= 2000 alors shifumi = feuille
} else if (nbrHasard <= 2000) {
    chifumiOrdi = "feuille";
    // --- Si résultat supérieur à 2000 alors shifumi = tronconneuse
} else {
    chifumiOrdi = "tronconneuse";
}

console.log(chifumiOrdi); // Affiche la réponse pour tester le programme.

// Choix joueur
chifumiJoueur = prompt("parpaing, feuille, tronconneuse");
console.log("Shifumi Ordi =", chifumiOrdi);
console.log("Shifumi Joueur = ", chifumiJoueur);

// ----------------------------------------------------------------------------------------------------------

// Match nul

// --- Si Ordi = parpaing et Joueur = pargaing Alors Match nul - Ordi 0 0 Joueur
if ((chifumiOrdi == "parpaing") && (chifumiJoueur == "parpaing")) {
    victoire = (0);
}
// --- Si Ordi = feuille et Joueur = feuille Alors Match nul - Ordi 0 0 Joueur
else if ((chifumiOrdi == "feuille") && (chifumiJoueur == "feuille")) {
    victoire = (0);
}
// --- Si Ordi = tronconneuse et Joueur = tronconneuse Alors Match nul - Ordi 0 0 Joueur
else if ((chifumiOrdi == "tronconneuse") && (chifumiJoueur == "tronconneuse")) {
    victoire = (0);
}

// Ordi Gagne
// --- Si Ordi = parpaing et Joueur = tronconneuse Alors Ordi Gagne - Ordi 1 0 Joueur
else if ((chifumiOrdi == "parpaing") && (chifumiJoueur == "tronconneuse")) {
    victoire = (1);
}
// --- Si Ordi = feuille et Joueur = parpaing alors Ordi Gagne - Ordi 1 0 Joueur
else if ((chifumiOrdi == "feuille") && (chifumiJoueur == "parpaing")) {
    victoire = (1);
}
// --- Si Ordi = tronconneuse et Joueur = feuille Alors Ordi Gagne - Ordi 1 0 Joueur
else if ((chifumiOrdi == "tronconneuse") && (chifumiJoueur == "feuille")) {
    victoire = (1);
}

// Joueur Gagne
// --- Si Ordi = parpaing et Joueur = feuille Alors Joueur Gagne - Ordi 0 1 Joueur
else if ((chifumiOrdi == "parpaing") && (chifumiJoueur == "feuille")) {
    victoire = (2);
}
// --- Si Ordi = feuille et Joueur = tronconneuse Alors Joueur Gagne - Ordi 0 1 Joueur
else if ((chifumiOrdi == "feuille") && (chifumiJoueur == "tronconneuse")) {
    victoire = (2);
}
// --- Si Ordi = tronconneuse et Joueur = parpaing Alors Joueur Gagne - Ordi 0 1 Joueur
else if ((chifumiOrdi == "tronconneuse") && (chifumiJoueur == "parpaing")) {
    victoire = (2);
}


console.log(victoire)


// Résultats
// Match nul
// Si Ordi=Joueur Alors Match Nul
if (victoire == 0) {
    console.log("Match Nul ! Essai encore !")
}

// Joueur Perds
// Si Ordi pas Match nul ou pas Gagné alors Perds
else if (victoire == 1) {
    console.log("bouh ! Tu es un loser")
}

// Ordi Perds
// Si Ordi pas Match nul ou pas Gagné alors Perds
else if (victoire == 2) {
    console.log("Bravo ! Tu es un Champion !")
}