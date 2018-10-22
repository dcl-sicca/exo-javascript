var nbrJoueur;
var nbrMystere;
var coupsJouer = 0;
var coupRestant = 5; // J'initialise sa valeur par défaut à 5
var i;

nbrMystere = random(0, 100);


console.log(nbrMystere); // Affiche la réponse pour tester le programme.


while (nbrJoueur != nbrMystere && coupRestant > 0) // TANT QUE "nbrJoueur" est différent de "nbrMystere" ET "coupsRestant" est supérieur à 0.
{
    console.log("Il te reste", coupRestant, "coups."); // Il reste 5 coups (car elle est initialisée à 5 par défaut)
    coupsJouer++;

    nbrJoueur = parseInt(prompt("Trouve la bonne valeur:")); // Redemande TANT QUE la condition de la boucle n'est pas remplie.


    // Affichage des infos selon les nombres :
    if (nbrJoueur < nbrMystere) {
        console.log("C'est plus !");
    } else if (nbrJoueur > nbrMystere) {
        console.log("C'est moins !");
    } else // Si tu as trouvé la bonne valeur
    {
        console.log("Bien joué ! Tu as trouvé en", coupsJouer, "coups."); // Affiche le nombre de coup utilisé.
        coupRestant++; // Si tu trouve la bonne valeur à la dernière tentative, il n'atteindra pas 0, il n'affichera donc pas que tu as perdu.
    }

    coupRestant--; // Retire un coup par tour de boucle

    if (coupRestant == 0) // SI "coupRestant" EST EGALE à 0 ===> La boucle ne remplira plus les conditions pour continuer la partie
    {
        console.log("Perdu !");
    }
}



// Génère un nombre aléatoire.
function random(min, max) {
    // Retourne une valeur entre 0 et 100.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}