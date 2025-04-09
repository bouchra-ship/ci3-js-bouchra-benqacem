
let nombreAleatoire = Math.floor(Math.random() * 100) + 1;

let devine = false;

while (!devine) {
  let proposition = parseInt(prompt("Devinez le nombre entre 1 et 100 :"));

  if (isNaN(proposition)) {
    console.log("Ce n'est pas un nombre valide.");
  } else if (proposition < nombreAleatoire) {
    console.log("Trop petit !");
  } else if (proposition > nombreAleatoire) {
    console.log("Trop grand !");
  } else {
    console.log("Bravo !");
    devine = true;
  }
}