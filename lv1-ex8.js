

let mot = prompt("Entrez un mot :");

let motInverse = mot.split('').reverse().join('');

if (mot === motInverse) {
  console.log("Le mot est un palindrome.");
} else {
  console.log("Le mot n'est pas un palindrome.");
}