function calculerMoyenne(tableau) {
  let somme = 0;
  
  for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }
  
  return somme / tableau.length;
}

let result = calculerMoyenne([10, 20, 30, 40, 50]);
console.log(result);
