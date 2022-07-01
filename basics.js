
console.log("Hallo ECMAScript");
// jedes Jahr erscheint ein neunes Feature des Standards, wir verwenden min. 2015
// die Browser werden regelmäßig angepasst.


//******************  Datentypen in JavaScript ********************/
// JavaScript kennt nur Dynamische Datentypen: Was bedeutet das?
// Datentypen werden durch Werte definiert und können sich in der Laufzeit ändern.
// JS kennt 8 Datentypen: 

// 1. NUMBER UND ALLES WAS WIE EINE ZAHL AUSSIEHT: im Speiche als DOUBLE

x = 2022;           // Integer
pi = 3.1415;        // Double - JS kennt intern nur Double
result = 44 / 0;    // Was ist das zu erwartende Ergebnis? Infinity vom Typ: number
console.log(result);    // Keine Eigenheit von JS

// 2. STRING UND ALLES WAS WIE TEXT UND ZEICHEN AUSSIEHT:

text = 'Hallo JavaScript';  //einefache Anführungsstriche
text = "Hallo JavaScript";  // doppelte Anführungsstriche
text = `Hallo JavaScript: ${ x }`;  // Back-Ticks Quote oder Template Ausdrücke
text 

// 3. BOOLEAN - EIN LOGISCHDER WEERT: WAHR ODER FALSCH
isWahr = true;
isFalsch = false;

// 4. UNDEFINED KENNT NUR EINEN WERT: undefined:
noDef = undefined;      // ist insofern etwas unklar, weil es sowohl der Wert als auch den Typ beschreibt
console.log(noDef);

// 5. NULL KENNT EBENFALLS NUR EINEN WERT: null:
isNull = null;          // aus technischer Sicht ist es ein eigenständiger Datentyp
console.log(typeof isNull); // auch wenn der Kompiler als Datentyp fälschlicherweise Object ausgibt.

// Wie in andere Sprachen auch gibt es Wertetype und Referenztypen. Die sit z.Bsp. wichtig ob mit Vergleichoperatoren
// nur der Wert oder auch der Typ vergliechen werden soll.
// Wertetypen: 
// number: ist Wert-Typ belegt im RAM (Stack) immer 64 Bit, da intern ja ein Double
// boolean, undefined, null sind ebenfalls Wertetypen
z1 = 23;
z2 = 23;
console.log("Vergleich, numbers: ", z1 == z2);

// Referenztypen:
// string: ist ein Referenz-Typ und die Belegung im RAM (Heap) ist Abhängig von der Länge des Strings
// arrays: ist ein Referenz-Typ und die Belegung im RAM (Heap) ist Abhängig von der Länge des Arrays und der Daten
// Vergleichoperatoren:
t1 = "Hallo";   // werden nicht die Werte vergliechen, sondern ob diese auf den selben Speicher verweisen
t2 = 'Hallo';   // der Compiler erkennt den gleichen Inhalt und weißt den Variablen die gleiche Speicheradresse zu
console.log("Vergleich, Strings: ", t1 === t2);

// Bezüglich des Vergleichsoperatoren == / === gibt es Bin JS Besonderheiten:

erg = 0 == '0';     // = True, da JS die Zahl intern in einen String umwandelt (Lösung?)
erg = 0 == 1;     // = ???, die Value Of Fuction wird aufgerufen!! Typsicherer Vergleich!! Lint-Regel!
erg

let a = 0 === '0' 
let b = 0 !== '0'
a
b
//let = lokale Variable!
// Der Strikt-Mode achtet darauf das z. Bsp. Variablen richtige definert werden.
// use strict meldet sich bei fehlenden Semikolons, verbietet with, unterwandert eval und reserviert neue Namen 
// für spätere Versionen (package, private, protected, pbulic, static, yield).
// Verhindert die Verwendung undefinierter Variablen

//'use strict'; 
// wird ab der Stelle wirksam, an der es in der Datei verwendet wird, soll aber immer am Anfang stehen.
// keine Back-Ticks und in jeder Datei neu deklarieren

// UNVERÄNDERLICHE VARIABLEN MIT const.

// 6. DATENTYP IST function, besprechen wir in einem 3. Abschnitt.

let array = [1,2,3,4,5,6,7,80]
array
z33 = z1 + z2 
z33