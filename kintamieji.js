"use strict";

console.log("kintamieji js loaded");

// primityvus kintamieji
//let arba const - deklaruojame kintamaji tik pirma karta sukuriant kintamaji
let age = 48; //number
let pi = 3.14; //number
let year = 2023;
//pakisti year reiksme
year = 2024;

//string - textas
let name = "James";
let town = "London";
let month = "Lapkritis";

//Boolen kintamasis - tik dvi reiksmes true arba false
//isUserLoggedIn - camelCase - pagrindinis js
//is-user-logged-in - kebab-case
//is_user_logged_in - snake_case
let isRaining = false;
let isUserLoggedIn = true;
let isSpecial = true;

// null ir undefind
//null - yra kintamasis bet nera reiksmes, naudojame isvalyti kintamoje reiksme
//undefind - kintamojo reiksme po deklaracijos, naudojame suzinoti ar yra nustatyta reiksme

let userName;
console.log(userName); //unddefind
userName = "james123";
console.log(userName); //james
//isvalyti userName reiksme
userName = null;
console.log(userName); //null

//susikurtume po kintamaji
//amziui
let myAge = 25;
//miestui
let myTown = "CapeTown";
//vardui
let myName = "James";
//amziui po 5 metu
let ageAfter = myAge + 5;
//atspauzdinti reiksmes consoleje
console.log("ageAfter:", ageAfter);
console.log("myAge==", myAge);
