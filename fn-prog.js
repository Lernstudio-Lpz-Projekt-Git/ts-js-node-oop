'use strict';
// NOCH EIN DATENTYP DAS 2020 ZU ECMAScript hinzugekommen ist.
// ALLES WAS EINE ZAHL IST, IST IN JS EINE NUMBER -> INTERN EINE DOUBLE
// BigInt ist ähnlich Number() eine Methode um den Type zu casten, explizit zu definieren
let maxInt = Number.MAX_SAFE_INTEGER;

console.log("Max Integer: ", maxInt);
for (let i = 0; i < 20; i++) {
    console.log(`Max Integer add ${i}: `, maxInt +i);
}

let bNumber = BigInt(4388858584748585871739740334782754356267337752716790202368);
let alternatNumber = 4388858584748585871739740334782754356267337752716790202368n;
console.log(bNumber);
console.log(alternatNumber + bNumber);          // OK
//console.log(alternatNumber + 23);             // Error
console.log(alternatNumber + BigInt(23));       // OK
console.log(typeof alternatNumber);             // = bigint
// DAS HAT ZUR FOLGE DAS WIR ALLE MATH. OPERATOREN AUSFÜHREN DÜRFEN, AUSSER DIE DIVISION, WEIL DIE IST IMMER NUMBER

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Das letzte Mal hatten wir den Unterbau von JavaScript näher betrachtet, heute möchte ich die
// beiden Programmierparadigmen: Funktionale & objektorientierte Programmierung näher betrachten.
// JS ist in dieser Hinsicht eine Multi-Paradigmen-Sprache, also eine Mischform aus beiden, obwohl
// die Funktionale Programmierung deutlich ausgeprägter ist als die OOP
// OOP benötigt die Möglichkeit Strukturen zu schaffen, und die beste Möglichkeit Strukturen zu schaffen
// sind immer noch Funktionen (nicht Objekte).
// Nicht alles was wir u.U. aus Hochsprachen wie C++ kennen, ist in JS umgesetzt worden,
// Insofrn bewegen wir uns hier auf einem relativen mittleren Niveau.

// FUNKTIONALE PROGRAMMIERUNG IN JAVASCRIPT
// Wir hatten das letzte Mal gesehen, der wichtigster Aspekt ist, zu verstehen das Funktionen
// Datentypen sind. Das heißt, sie können als wie number, strings usw. als Daten im Code weitergegeben
// werden, sie können als Argumente verwendet werden oder Funktionen können auch als Rückgabe-Werte
// funkieren, dienen. Funktionen sind also nur Werte mit einem besonderen Datentyp.

// Grundsätzlich kann man funktionales Vorgehen auf wenige Kern-Prinzipien:
// 1. Funktionen haben Inputs und Outputs. 
// 2. Sie bearbeiten keine Daten, die ihnen nicht explizit übergeben wurden.
// 3. Daten („Variablen“) werden nie wirklich verändert, sondern dienen nur als statischer Ausgangspunkt 
// für die Erzeugung anderer Daten.

// Ein typischer Funktions-Ausdruck
let state = {
    open: false
};

const toggleState = function (stateArg) {
    return { open: !stateArg.open };
}

state = toggleState(state);
//console.log(state);
state = toggleState(state);
//console.log(state);

// Ein Funktion bei dem wir das Ergebnis zurück geben wollen:
const multi3 = function (n) {
    return n * 3;
};
const multi5 = function (n) {
    return n * 5;
};
const multi7 = function (n) {
    return n * 7;
};

// console.log(multi3(9));
// console.log(multi5(9));
// console.log(multi7(9));
// natürlich läßt sich das PROBLEM mit einer Funktion mit zwei Werte-Parameter lösen,
// aber wie haben hier eine Klasse an Funktionen, die immer das gleich tut, und
// es stellt sich die Frage: können wir diese Implementierung nicht funktionaler lösen?


// Die Idee ist, dass wir eine Funktion schreiben, die uns alle obenstehenden Funktionen vereint 
// und als Funktion zurück gibt
const getMultiplikatorX = function(x) {
    return function(n) {
        return n * x;
    };
};

const multiX5 = getMultiplikatorX(5);
console.log(multiX5(9));
const multiX7 = getMultiplikatorX(7);
console.log(multiX7(9));


// Wirklich Spaß macht funktionale Programmierung erst mit Funktionen höherer Ordnung. 
// Dabei handelt es sich um: 
// 1. Funktionen, die Funktionen zurückgeben. (Higher Order-Functions)

const getMultiX = function (x) {
    let ergebnis = 0;
    
    function add(wert) {
        ergebnis = wert + x;
    };
    function sub(wert) {
        ergebnis = wert - x;
    };
    function multi(wert) {
        ergebnis = wert * x;
    };
    function divi(wert) {
        ergebnis = x / wert;
    }
    // Die innere Funktion ist eine sogenannter Funktions-Abschluss o. Closures
    return {
        addFn: function (n) {
            add(n);
        },
        subFn: function (n) {
            sub(n);
        },
        multiFn: function (n) {
            sub(n);
        },
        divFn: function (n) {
            divi(n);
        },
        value: function () {
            return ergebnis;
        }
    };
};

// jetzt kann ich mir meine Funktionen, die ich benötige "bauen":
const multiFunkional = getMultiX(4);
console.log("Ergebnis: " , multiFunkional.value());
multiFunkional.addFn(5); // x = 4, n = 5 => 9
console.log("Ergebnis: " , multiFunkional.value());
multiFunkional.divFn(2); // x = 4, n = 2 => 2
console.log("Ergebnis: " , multiFunkional.value());

//--------------------------------------------------------------------
// 2. Oder Funktionen, die Funktionen als Parameter annehmen:
// Beispiel, das Multiplizieren it einer Zahl:
const primes = [1, 2, 3, 5, 7, 11]; // die Sequenz mit der ich Berechnungen durchführen möchte
const getDoubleValue = function (array) {
    const res = [];  // Ergebnis-Array
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const double = 2 * element;
        res.push(double);
    }
    return res;
}

const doublePrimes = getDoubleValue(primes);
console.log(doublePrimes);

// Können wir nicht eine Funktion ertellen, deren Berechnung generisch ist:

const genericFunc = function (array, fn) {
    const res = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const double = fn(element); // hier wird die Funktion ausgeführt
        res.push(double);
    }
    return res;
}

// wir könnten jetzt obrige Funktion anpassen und eine Funktion am Parameter übergeben:
const berechneMit2 = genericFunc(primes, function (element) {
    return element * 2;
});
console.log(berechneMit2);

const berechneMit3 = genericFunc(primes, function (element) {
    return element * 3;
});

console.log(berechneMit3);

// Weil dieser Funktionsausdruck so generisch ist, ist er in JavaScript schon implementiert:
// Wir kennen diese genrischen Funktionen als map(), reduce(), sort(), filter(), sam(), includes() usw.

const berechneMit4 = primes.map(function (element) {
    return element * 3;
});

console.log(berechneMit4);

// neben den function-statements und function-expresions, gibt es noch die function-lambda-Ausdrücke

const berechneMit5 = primes.map((element) => {
    return element * 4;
});
console.log(berechneMit5);

// wir können die Lambda-Funktion noch optimieren
const berechneMit6 = primes.map(e => e * 5);
console.log(typeof berechneMit6);

// Das ist ein Kern-Element funktionaler Programmierung, dass man Funktionen herumreichen kann,
// als PARAMETER oder als RÜCKGABEWERT
// DAS WIR FUNKTIONEN IN FUNKTIONEN HINEINGEBEN KÖNNEN (auch als Callback-Funktionen bekannt)
// DAS WIR FUNKTIONEN AUS FUNKTIONEN ZURÜCK GEBEN KÖNNEN
// Typische Callback-Funktion:
setTimeout(() => {
    console.log(berechneMit6);
}, 3_000);

console.log("-------------- ENDE--------------");