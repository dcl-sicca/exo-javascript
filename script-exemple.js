var a;
a = 30;
var b;
b = 4;
var c;
c = a + b;
console.log(c); // affiche 34
c = a - b;
console.log(c); // affiche 26
c = a / b;
console.log(c); // affiche 7,5
c = a * b;
console.log(c); // affiche 120
c = a % b;
console.log(c); // affiche 2
a = 12;
a = a + 5;
a = a + 5;
console.log(a); // affiche 22

a++; // est égale à a+1
console.log(a);
/*------------------------------------------*/
var a;
var b;

a = 10;
a = 25;

function add() {
    var c; // la variable c n'existe que dans la fonction
    c = "choucroute"
    console.log(a + b)
    console.log(c);
}

console.log(c)
add(); // execute la fonction
/*------------------------------------------*/
var a;
var b;
var c;

a = prompt("a?", "aaa"); //chaine de caractère demandé
b = prompt("b?", "bbb"); //chaine de caractère demandé

c = (a + b);


console.log(c);

console.log(typeof(12));
console.clear();

/*------------------------------------------*/
// Verifié le type de données

console.log(typeof(12));
console.log(typeof(12, 5));
console.log(typeof("12"));
console.log(typeof(true));
console.log(typeof(add()));

/*------------------------------------------*/

console.clear();

var a;
var b;
var c;

a = parseInt(prompt("Votre age ?", "1")); //chaine numerique
b = parseInt(prompt("b?", "2")); //chaine numerique

c = (a + b);

console.log(c);