// opérateurs de comparaison
console.log(1 == 1); //true
console.log(1 == "1"); //true
console.log(1 === "1"); //false
console.log(1 <= 2); //true
console.log(1 >= 2); //false
console.log(1 < 2); //true
console.log(1 > 2); //false
console.log(1 != 2); //true
console.log(1 != 1); //false
console.log(1 !== "1"); //true

//opérateurs logiques

//ET

console.log(true && true); //true
console.log(1 == 1 && 1 < 2); //true - && "logic et"

console.log(true && false); //false 
console.log(1 == 1 && 1 > 2); //false

//OU

console.log(true || false); //true || "logic ou"
console.log(1 == 1 || 1 > 2); //true

console.log(false || false); //false
console.log(1 != 1 || 1 > 2); //false

//Conditions

if (condition) {;
}

var a = 5;
var b = 12;

if (a == b) {
    console.log("les chiffres sont égaux")
}

// rien ne se passe

var a = 5;
var b = 5;

if (a == b) {
    console.log("les chiffres sont égaux")
}

// "les chiffres sont égaux"

if (a != b) {
    console.log("les chiffres sont différents")
}

// ELSE

var a = 5;
var b = 5;

if (a == b) {
    console.log("les chiffres sont égaux")
} else {
    console.log("les chiffres sont différents")
}

//"les chiffres sont égaux"

var a = 5;
var b = 6;

if (a == b) {
    console.log("les chiffres sont égaux")
} else {
    console.log("les chiffres sont différents")
}

//"les chiffres sont différents"

/*-----------------------------*/
var a = 5;
var b = 7;
var c = 5;

if (a == b) {
    console.log("a et b sont égaux");
} else if (a == c) {
    console.log("a et c sont égaux")
} else if (b == c) {
    console.log("b et c sont égaux")
} else {
    console.log("tous les chiffres sont différents")
}

var a = 5;
var b = 7;
var c = 7;

if (a == b) {
    console.log("a et b sont égaux");
} else if (a == c) {
    console.log("a et c sont égaux")
} else if (b == c) {
    console.log("b et c sont égaux")
} else {
    console.log("tous les chiffres sont différents")
}


// for

for (i = 0; i <= 5; i = i + 1) {
    console.log(i);
}

for (i = 0; i <= 5; i = i + 1) {
    console.log(i);
}

var i = 0;

// while = tant que alors que if une seule fois
while (i < 5) {
    console.log(i);
    i++;
}


// Break quand valeur True
for (i = 0; i <= 5; i = i + 1) {
    console.log(i);
    if (i == 3) {
        break
    }
}