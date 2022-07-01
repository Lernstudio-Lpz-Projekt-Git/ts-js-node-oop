'use strict';

// DER DATENTYP function
// ZWEI TYPEN VON FUNKTIONEN
// 1. function statement:
// Muss nicht deklariert werden, da der Compiler die js-Datei nach dem Datentyp function durchsucht und alle
// verwendungen einsammelt.

const erg = name();
console.log(erg)

function name () {
    return;
}

// 2. function expression:
// ist ein Funktionsausdruck, ist eine Zuweisung, der in eine Variable abgelegt wird.


const name2 = function () {
    return;
};
const erg2 = name2();
console.log(erg2)

// Handhabung ist frei und em Programmierer überlassen, Konsitenz ist wichtig!!
// BESONDERHEITEN:
// 1. BESITZT EINE FUNKTION keinen Rückgabewert, wird automatisch ein Rückgabe erzeugt: undefined!!
const name3 = function () {
    return 22 + 44;
};
const erg3 = name3();
console.log(erg3)

// 2. ANZAHL DER PARAMETER!!
const name4 = function (x,y) {
    return x * y;
};
// Es ist möglich weniger als auch mehr Argumente zu übergeben
let ergbniss = name4(2, 3);      // normale Verwendung
ergbniss = name4(2, 3, 45, 22);  // sind vorhanden, ich kann aber nicht zugreifen
ergbniss = name4(2);            // zweite Wert undefined, möglich ist:
ergbniss = name4();             // alle Werte undefined
ergbniss

const name6 = function (x,y) { // wir können aber auch optionale parameter definieren: function(x = 0, y = 0)
    return x * (y || 0);    // undefined ist ein falsy value und dann wird der 2. Oder-Wert verwendet
};
console.log(name6(2));


// Lösung ist der Rest-Parameter:
const name5 = function (x,y, ...rest) {  // Rest-Parameter ist ein Array mit Werten
    let e = x + y;
    let a = 0;
    let z;
    for (let z= 0; z < rest.length; z++) {
        a += rest[z];
        //console.log(z)
    }
    return a + e; 
};

ergbniss = name5(2, 3, 45, 22); 
console.log(ergbniss)

const mult = (e) => {
    return e*3;
}
// 7. DATENTYP IST object, besprechen wir in einem 4. Abschnitt.
let myArray = [1,2,3,4,5,6,7,8,9]
const result2 = myArray.map(e => e * 3);
result2

console.log(result2)

/// Die Frage: Unter welchen Umständen können nur Function Expression eingesetzt werden?
/// (1) In IIFEs, das steht für Immediately-invoked Function Expression:
(function () {
    //...
})();
/// ODER:
(() => {
    //...
})();
// GRUND: //////////////////////////////////////
// Da es in JavaScript keine Namensräume gibt, können mit diesem Konstrukt, 
// verschiedene Code-Einheiten gegen andere abgrenzt werden.
// Man macht sich hierbei zunutze, dass eine Funktion immer einen Scope erzeugt. 
// Variablen und Funktionen, die in einem bestimmten Scope deklariert werden, sind außerhalb 
// dieses Scopes nicht sichtbar, sodass der gewünschte Effekt eines privaten Raumes entsteht.

/// (2) In Funktionen die Funktionen als Rückgabewertbeinhalten:
// Funktionen, die andere Funktionen verarbeiten, indem sie sie entweder als Argumente verwenden 
// oder sie zurückgeben, werden als Funktionen höherer Ordnung bezeichnet.
// Ein einfaches Beispiel: Um zu vermeiden, dass ich für jeden Einzelfall einer Addition eine Funktion deklariere,
// verwende ich eine Funktion, die eine Funktion als Rückgabewert hat, sogenannte Closures:
const getAddFunc = function (x) {
    return function (n) {
        return x + n;
    }
};
// ODER:
const getaddFunc = (x) => {
    return (n) => {
        return x + n;
    }
};
// Nun kann ich beliebige Funktionen mit dem Parameter x erzeugen:
const add5 = getAddFunc(5);
const add6 = getAddFunc(6);  // usw.
// Hierbei wird kein Wert berechnet, sondern eine Funktion in add5 / add6 abgelegt, vobei x = 5 oder 6 ist.
// Nun kann ich schreiben:
const erg5 = add5(22); // jetzt wird der Wert berechnet: = 110
const erg6 = add6(6); //  = 36

// Dieses sehr einfache Beispiel ist beliebig erweiterbar und nach oben sind dem Abstraktionsvermögen keine Grenzen gesetzt.
// Aus diesem Konzept heraus sind die uns schon bekannten vorgefertigen anonymen Funktionen wie: 
// map(), sort(), reduce(), filter() usw. entwickelt worden. Die ihrerseits Funktionen als Parameter entgegennehmen.
// Ein abschließendes Beispiel soll eine wichtige Verwendung von Closures demonstrieren:  
// die Beibehaltung eines privaten Verweises auf eine Variable im äußeren Scope.

const secretPassword = () => {
    const password = 'xh38sk';
    return (pw) => {
        (pw === password) ? true  : false;
      }
  }
  // ODER:
  const secreTPassword = () => {
    const password = 'xh38sk';
    const checkPassword = (pw) => {
        (pw === password) ? true  : false;
      }
      return checkPassword;
  }

const passwordFunc = secretPassword();
passwordFunc.checkPassword('heyisthisit?'); // false
passwordFunc.checkPassword('xh38sk'); // true