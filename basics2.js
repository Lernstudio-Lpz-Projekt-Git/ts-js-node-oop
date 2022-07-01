'use strict';

// FALSY VALUES IN JS:
// WERTE DIE IN JS IMMER DEN WERT false zurückgeben:
// false, 0, '', undefined, null
let x = undefined;

if (!x) {
    console.log(x);
}

// ein Beispiel aus anderer Perspektive:
let v1 = 22; 
let v2 = 44;            // default Value
let resOR = v1 || v2;   // || Erwartet boolische Werte, was passiert in der Shortcut valuation? 1. = true OK
                        // Hier greift die Falsy Tabelle
                        // als Ergebnis wird der Wert zurückgegeben.
console.log(resOR);

let resAND = v1 && v2;  // Beide Seiten werden ausgewertet, Ergebnis ist immer der ??
console.log(resAND);



