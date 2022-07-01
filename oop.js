//'use strict';

// DAS PROBLEM: IN JS GIBT ES KEINE KLASSEN
// ES GIBT ABER new, this und was hat das mit dem strict-Mod zu tun?
// WAS BEDEUTET DAS FÜR DIE PROGRAMMIERUNG?

const person = function (name) {
    this.name = name;
}

let p1 = person("Steffen"); // Error this ist undefined und wenn es im Browser läuft, dass Window-Objekt
// das heißt, die Property name wird im Window-Objekt überschrieben
// hier ist this undefined und ohne dem strict-MODE auch kein Fehler
// erst der strict-MODE veranlasst den Kompiler einen Exzeption auszulösen
console.log(p1)

// Woher wissen wir, das wir diese Funktion mit new aufrufen müssen?
// es gibt dazu nur die Schreib-Konvention:
// es gibt keine technische Gründe das new zu verwenden
const Person = function (name, alter) {
    this.name = name;
    this.alter = alter;

    this.getInfos = function () {
        console.log(`${this.name } ist ${this.alter} jung.`);
    }
}
let p2 = new Person("Philipp", 29);
p2.getInfos();

// SEIT 2015 IST EIN KLASSEN KONSTRUKT DAZU GEKOMMEN:
// WIR KÖNNEN NUN SCHREIBEN

class Person2 {
    constructor (name, alter) {
        this.name = name;
        this.alter = alter;
    }
    
    getInfos () {
        console.log(`${this.name } ist ${this.alter} jung.`);
    }
}

// wir können dies wie eine Klasse aufrufen, dennoch wird im Hintergrund nur die obrige Funktion
// generiert und ist sozusagen nur eine syntaktische Stütze um dieses Konstrukt von einer Funktion 
// zu unterscheiden und damit eindeutig zu definieren, das hier der new-Operator verwendet werden
// muss
let p3 = new Person2("Alice", 22);
p3.getInfos();

// man kann das sehr gut sehen durch die Typ-Abfrage:
console.log(typeof Person2);  // = function

// Bietet für Programmierer die aus anderen OOP Sprachen wie Java, C# kommen großes Potential
// an Missverständnissen
// man hat es nachwievor mit Funktionen zu tun, was eben der Grund ist, dass es all die 
// schönen Dinge, die es in OOP gibt, in JavaScript nicht gibt:
// keine Zugriffsmodifikatoren (privat, protectet, public usw.)
// keine Datentypen aus Klassen
// keine Interfaces o. Abstract
// keine virtuellen Methoden und keine Polymorphie oder Polymorphismus 
// keine Möglichkeit Methoden zu überschreiben usw.

// Deshalb ist es in der reinen JS-Programmierung wichtig, den Umgang mit Funktionen zu beherrschen.
// OOP in JavaScript spielt in professionellen Projekten keine große Rolle
// ist OOP bei der Software-Entwicklung gefragt, und das ist sie 100%, dann kommt TYPESCRIPT zu Einsatz.

// Nächstes Thema: Node.js & TypeScript