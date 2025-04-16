function compterVoyelles(chaine) {
  let voyelles = "aeiouAEIOU";
  let compteur = 0;
  
  for (let i = 0; i < chaine.length; i++) {
    if (voyelles.includes(chaine[i])) {
      compteur++;
    }
  }
  return compteur;
}
