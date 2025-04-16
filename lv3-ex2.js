function compterMot(chaine) {
  let mots = chaine.split(/\s+/);
  let occurrences = {};
  
  for (let mot of mots) {
    if (occurrences[mot]) {
      occurrences[mot]++;
    } else {
      occurrences[mot] = 1;
    }
  }
  
  return occurrences;
}