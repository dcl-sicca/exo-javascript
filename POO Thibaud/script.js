function monObjet(hp, name, power) {
    this.pointsDeVie = hp;
    this.nom = name;
    this.puissance = power;

    this.attaque = function(powerADV) { this.pointsDeVie -= powerADV };
    this.decrire = function() { console.log(this.pointsDeVie) };
}

console.log(monObjet);

var perso1 = new monObjet(100, "mage", 15);

perso1.color = "blue";

console.log(perso1);

var perso2 = new monObjet(70, "mage", 20);

console.log(perso2);

perso2.decrire();
perso1.attaque(perso2.puissance);
perso1.decrire();