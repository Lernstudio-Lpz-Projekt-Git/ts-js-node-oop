'use strict';

const { getDefaultLibFileName } = require("typescript");

// DER DATENTYP object
// ein object hat nichts mit Objekten aus der OOP zu tun, 
// ist keine Instants eine Klasse oder ähnlicher Konstruktionen und Konzepten aus der OOP
// objects sind eine Sammlung von Daten die aus Key-Value Paaren besteht
// 1. Eine Sonderform von Objekten ist der Referenztyp ARRAY:

const primes = [1,2,5,7,11, "zwei"];
console.log(typeof primes);
primes[0] = 120;         // Trotz, dass das Objekt mit const deklariert ist, 
                        // bleiben die Inhalte modifizierbar. Warum?
console.log(primes);

// 2. Objekte vom Referenztyp DICTONARY:
const angestellter = {
    name: "Max",                // werden auch als Property + Value bezeichnet
    vorname: "Mustermann",
    gehaltsgruppe: 3,
    abteilung: 'EINKAUF',
    fullname: function() {  // an dieser Stelle können wir nur mit einer function-Expression arbeiten
        return `${ this.vorname } ${ this.name }`; // Template-string um Strings zusammenzufügen
    } // Short syntax möglich
};

console.log(angestellter.name);
// const propName = 'name';
console.log(angestellter['vorname'])
console.log(angestellter.fullname());

// Was passiert???
console.log(angestellter.anzahl); // ODER
angestellter.anzahl = 99; 


// die Funktion als statement:
function getFullname(vorname, name) {  // ein function-statement deklarieren
    return `${ vorname } ${ name }`; // Template-string um Strings zusammenzufügen
}
const getFullname2 = (vorname, name) => `${ vorname } ${ name }`;

const personal = {
    name: "Peter",
    vorname: "Lustig",
    gehaltsgruppe: 30,
    abteilung: 'Personalabtzeilung',
    fullname: getFullname2(this.vorname, this.name)  // Aufruf der function statements
    // fullname: function () {return `${ this.vorname } ${ this.name }`;}
};

console.log(personal);
console.log(personal.name);
console.log(personal.fullname);
//personal = null; // const verhindert dass das Objekt auf null gesetzt wird

const person = null; // ist möglich da null vom Typ Object ist.

// In einem anderen Teil wird es um FUNKTIONALE UND PROZEDURALE PROGRAMMIERUNG  gehen.

// Traditional Anonymous Function
/* function(a){
    return a + 100;
  } */
  
  // Arrow Function Break Down
  // 1. Remove the word "function" and place arrow between the argument and opening body bracket
  (a) => {
    return a + 100;
  }
  
  // 2. Remove the body braces and word "return" -- the return is implied.
  (a) => a + 100;
  
  // 3. Remove the argument parentheses
  a => a + 100;
  