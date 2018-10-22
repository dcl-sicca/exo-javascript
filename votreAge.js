console.clear();
var anActuel = 2018;
var dateNaissance;
var age;
var an;

age = parseInt(prompt("Quel âge avez-vous ?", "1"));
dateNaissance = (anActuel - age);

an = parseInt(prompt("En quel année ?", "1"));

console.log("Vous êtes né en : " + (dateNaissance));

an2 = an - dateNaissance;

console.log("En " + (an) + " vous aviez : " + (an2) + " ans");

if (an2 < 18) {
    console.log("Vous êtes mineur");
} else if (an2 >= 18 && age < 60) {
    console.log("Vous êtes mageur et jeune");
} else {
    console.log("Vous êtes vieux, prenez donc votre retraître !");
}