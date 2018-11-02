function shifumi() {
    //Déclaration des variables --------------------------------------------------------------------------------------------------

    var nbrHasard;
    var choixOrdi;
    var choixJoueur;
    var victoirePour;

    //Déclaration des éléments du DOM ---------------------------------------------------------------------------------------------------------------
    var parpaing = document.getElementById("parpaing");
    var isActivated = false;


    //TODO: Fonction Jeu ----------------------------------------------------------------------------------------------------------------------------
    // --- Variable hasard sur multiple de 3
    nbrHasard = random(0, 3000);
    // --- Génère un nombre aléatoire.
    function random(min, max) {
        // --- Retourne une valeur entre 0 et 3000.
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // Affiche la réponse pour tester le programme.
    console.log(nbrHasard);

    //TODO: Choix de l'IA -> choixOrdi --------------------------------------------------------------------------------------------------------------
    // --- Si résultat <= 1000 alors Shimumi = parpaing
    if (nbrHasard <= 1000) {
        choixOrdi = "parpaing";
        // --- Si résultat <= 2000 alors shifumi = feuille
    } else if (nbrHasard <= 2000) {
        choixOrdi = "feuille";
        // --- Si résultat supérieur à 2000 alors shifumi = tronconneuse
    } else {
        choixOrdi = "tronconneuse";
    }
    // Affiche la réponse pour tester le programme.
    console.log(choixOrdi);

    //TODO: récupérer le choix du joueur -> choixJoueur --------------------------------------------------------------------------------------------
    // choixJoueur = prompt("parpaing, feuille, tronconneuse");
    parpaing.addEventListener("click",
        function() {
            if (isActivated === false) {
                parpaing.style.backgroundColor = "red";
                choixJoueur = ("parpaing")
                isActivated = true;
            } else {
                parpaing.style.backgroundColor = "deeppink";
                isActivated = false;
            }
        }
    );
    console.log("Shifumi Ordi =", choixOrdi);
    console.log("Shifumi Joueur = ", choixJoueur);
    //TODO: Comparer les choix (choixJoueur, choixOrdi)-> victoirePour -----------------------------------------------------------------------------

    //TODO: Si : Cas égalité -----------------------------------------------------------------------------------------------------------------------
    // --- Match nul
    // --- Si Ordi = parpaing et Joueur = pargaing Alors Match nul - Ordi 0 0 Joueur
    if ((choixOrdi == "parpaing") && (choixJoueur == "parpaing")) {
        victoirePour = (0);
    }
    // --- Si Ordi = feuille et Joueur = feuille Alors Match nul - Ordi 0 0 Joueur
    else if ((choixOrdi == "feuille") && (choixJoueur == "feuille")) {
        victoirePour = (0);
    }
    // --- Si Ordi = tronconneuse et Joueur = tronconneuse Alors Match nul - Ordi 0 0 Joueur
    else if ((choixOrdi == "tronconneuse") && (choixJoueur == "tronconneuse")) {
        victoirePour = (0);
    }
    //TODO: Sinon Si : Cas de victoire -------------------------------------------------------------------------------------------------------------
    // Ordi Gagne
    // --- Si Ordi = parpaing et Joueur = tronconneuse Alors Ordi Gagne - Ordi 1 0 Joueur
    else if ((choixOrdi == "parpaing") && (choixJoueur == "tronconneuse")) {
        victoirePour = (1);
    }
    // --- Si Ordi = feuille et Joueur = parpaing alors Ordi Gagne - Ordi 1 0 Joueur
    else if ((choixOrdi == "feuille") && (choixJoueur == "parpaing")) {
        victoirePour = (1);
    }
    // --- Si Ordi = tronconneuse et Joueur = feuille Alors Ordi Gagne - Ordi 1 0 Joueur
    else if ((choixOrdi == "tronconneuse") && (choixJoueur == "feuille")) {
        victoirePour = (1);
    }
    //TODO: Sinon : Cas de défaite -----------------------------------------------------------------------------------------------------------------
    // --- Joueur Gagne
    // --- Si Ordi = parpaing et Joueur = feuille Alors Joueur Gagne - Ordi 0 1 Joueur
    else if ((choixOrdi == "parpaing") && (choixJoueur == "feuille")) {
        victoirePour = (2);
    }
    // --- Si Ordi = feuille et Joueur = tronconneuse Alors Joueur Gagne - Ordi 0 1 Joueur
    else if ((choixOrdi == "feuille") && (choixJoueur == "tronconneuse")) {
        victoirePour = (2);
    }
    // --- Si Ordi = tronconneuse et Joueur = parpaing Alors Joueur Gagne - Ordi 0 1 Joueur
    else if ((choixOrdi == "tronconneuse") && (choixJoueur == "parpaing")) {
        victoirePour = (2);
    }
    //--- Affiche la réponse pour tester le programme.
    console.log(victoirePour)
        //TODO: Afficher les résultats -----------------------------------------------------------------------------------------------------------------
        // Résultats
        // Match nul
        // Si Ordi=Joueur Alors Match Nul
    if (victoirePour == 0) {
        console.log("Match Nul ! Essai encore !")
    }

    // Joueur Perds
    // Si Ordi pas Match nul ou pas Gagné alors Perds
    else if (victoirePour == 1) {
        console.log("bouh ! Tu es un loser")
    }

    // Ordi Perds
    // Si Ordi pas Match nul ou pas Gagné alors Perds
    else if (victoirePour == 2) {
        console.log("Bravo ! Tu es un Champion !")
    }
    //TODO: Afficher le choix du joueur (choixJoueur) ----------------------------------------------------------------------------------------------
    //TODO: Afficher le choix de l'IA (choixOrdi) --------------------------------------------------------------------------------------------------
    //TODO: Afficher le résultat -------------------------------------------------------------------------------------------------------------------
    //TODO: Fonction restart -----------------------------------------------------------------------------------------------------------------------
}

shifumi();