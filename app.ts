console.log("Hallo ECMAScript");
// jedes Jahr erscheint ein neunes Feature des Standards, wir verwenden min. 2015
// die Browser werden regelmäßig angepasst.


//******************  Datentypen in JavaScript ********************/
// JavaScript kennt nur Dynamische Datentypen: Was bedeutet das?
// Datentypen werden durch Werte definiert und können sich in der Laufzeit ändern.
// JS kennt 8 Datentypen: 

// 1. NUMBER UND ALLES WAS WIE EINE ZAHL AUSSIEHT: im Speiche als DOUBLE

var x = 2022;           // Integer
var pi = 3.1415;        // Double - JS kennt intern nur Double
var result = 44 / 0;    // Was ist das zu erwartende Ergebnis? Infinity vom Typ: number
console.log(result);    // Keine Eigenheit von JS

// 2. STRING UND ALLES WAS WIE TEXT UND ZEICHEN AUSSIEHT:

var text = 'Hallo JavaScript';  //einefache Anführungsstriche
var text = "Hallo JavaScript";  // doppelte Anführungsstriche
var text = `Hallo JavaScript: ${ x }`;  // Back-Ticks Quote oder Template Ausdrücke
console.log(text);  

// 3. BOOLEAN - EIN LOGISCHDER WEERT: WAHR ODER FALSCH
var isWahr = true;
var isFalsch = false;

// 4. UNDEFINED KENNT NUR EINEN WERT: undefined:
var noDef = undefined;      // ist insofern etwas unklar, weil es sowohl der Wert als auch den Typ beschreibt
console.log(noDef);

// 5. NULL KENNT EBENFALLS NUR EINEN WERT: null:
var isNull = null;          // aus technischer Sicht ist es ein eigenständiger Datentyp
console.log(typeof isNull); // auch wenn der Kompiler als Datentyp fälschlicherweise Object ausgibt.

// Wie in andere Sprachen auch gibt es Wertetype und Referenztypen. Die sit z.Bsp. wichtig ob mit Vergleichoperatoren
// nur der Wert oder auch der Typ vergliechen werden soll.
// Wertetypen: 
// number: ist Wert-Typ belegt im RAM (Stack) immer 64 Bit, da intern ja ein Double
// boolean, undefined, null sind ebenfalls Wertetypen
var z1 = 23;
var z2 = 23;
console.log(z1 === z2);

// Referenztypen:
// string: ist ein Referenz-Typ und die Belegung im RAM (Heap) ist Abhängig von der Länge des Strings
// Vergleichoperatoren:
var t1 = "Hallo";   // werden nicht die Werte vergliechen, sondern ob diese auf den selben Speicher verweisen
var t2 = 'Hallo';   // der Compiler erkennt den gleichen Inhalt und weißt den Variablen die gleiche Speicheradresse zu
console.log(t1 === t2);

// Bezüglich des Vergleichsoperatoren == / === gibt es Bin JS esonderheiten:

//var erg = 0 == '0';



