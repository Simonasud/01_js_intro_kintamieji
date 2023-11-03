"use strict";
console.log("promt.js");

// gauti ivesties reiksme is vartotojo
let sk1AsString = prompt("iveskite pirmaji skaiciu");
let sk2AsString = prompt("iveskite antraji skaiciu");
let sk1 = Number(sk1AsString);
let sk2 = Number(sk2AsString);
//sukurti skaiciuotuva daugybai
// let sk1 = 9;

// let sk2 = 5;

let daugyba = sk1 * sk2;
console.log("sk1:", sk1);
console.log("sk2:", sk2);
console.log(daugyba);
