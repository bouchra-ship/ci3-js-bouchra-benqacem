function lesDiviseurs(nombre) {
  let diviseurs = [];
  
  for (let i = 1; i <= nombre; i++) {
    if (nombre % i === 0) {
      diviseurs.push(i);
    }
  }
  
  return diviseurs;
}

let result = lesDiviseurs(12);
console.log(result);