let nombre = parseInt(prompt("Entrez un nombre :"));

if (isNaN(nombre)) {
  console.log("Ce n'est pas un nombre valide.");
} else if (nombre === 0) {
  console.log("Le nombre est neutre.");
} else if (nombre % 2 === 0) {
  console.log("Le nombre est pair.");
} else {
  console.log("Le nombre est impair.");
}
