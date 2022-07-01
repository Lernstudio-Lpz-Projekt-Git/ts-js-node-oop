const categoryListe = [
  ["Vegan", "Bockwürste aus Möhren", 2345],
  ["Vegan", "Käse aus Soja", 1345],
  ["Vegan", "Blumenkohl aus Blumen", 6543],
  ["Mexicanisch", "Chili con carne", 9876],
  ["Mexicanisch", "Scharf und Süß", 3221],
  ["Burger", "Big Burger mit Käse", 9899],
  ["Burger", "Chicken-Burger", 8877],
  ["Burger", "Burger aus Meistern", 6677],
];

let resultListe = {};
function isKeyExists(obj, key) {
  if (obj[key] == undefined) {
    return false;
  } else {
    return true;
  }
}
let index = 0;
for (let item of Object.keys(categoryListe)) {
  if (isKeyExists(resultListe, categoryListe[item][0])) {
    //console.log('Key vorhanden');
    let zwL = resultListe[categoryListe[item][0]];
    zwL.push(categoryListe[item]);
    resultListe[categoryListe[item][0]] = zwL;
  } else {
    //console.log('Key NICHT vorhanden');
    resultListe[categoryListe[item][0]] = Array(categoryListe[item]);
  }
}
console.log(Array(resultListe));
// Object.entries(resultListe).forEach(([key, value]) =>
//   console.log(`${key}: ${value}`, "\n")
// );

const categoryObject = [
  { cat: "Vegan", title: "Bockwürste aus Möhren", id: 2345 },
  { cat: "Vegan", title: "Käse aus Soja", id: 1345 },
  { cat: "Vegan", title: "Blumenkohl aus Blumen", id: 6543 },
  { cat: "Mexicanisch", title: "Chili con carne", id: 9876 },
  { cat: "Mexicanisch", title: "Scharf und Süß", id: 3221 },
  { cat: "Burger", title: "Big Burger mit Käse", id: 9899 },
  { cat: "Burger", title: "Chicken-Burger", id: 8877 },
  { cat: "Burger", title: "Burger aus Meistern", id: 6677 },
];
let testRes = {};
testRes[categoryObject.map(item => item.cat)] = categoryObject.map(item => item);
console.log(Array(testRes));
