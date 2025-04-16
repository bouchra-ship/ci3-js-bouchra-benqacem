
function filtrerNombresPairs(tableau) {
  let nombresPairs = [];
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] % 2 === 0) {
      nombresPairs.push(tableau[i]);
    }
  }
  return nombresPairs;
}

let tableauOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = filtrerNombresPairs(tableauOriginal);

console.log(result);