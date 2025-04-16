function filtrerMotsMajuscule(tableau) {
  let motsMajuscule = [];
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i][0] === tableau[i][0].toUpperCase()) {
      motsMajuscule.push(tableau[i]);
    }
  }
  return motsMajuscule;
}
let tableauMots = ["chat", "Chien", "voiture", "Avion", "soleil"];
let result = filtrerMotsMajuscule(tableauMots);

console.log(result);
