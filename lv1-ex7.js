function motLePlusLong(mots) {
  let motMax = mots[0]; // On commence avec le premier mot du tableau

  for (let i = 1; i < mots.length; i++) {
    if (mots[i].length > motMax.length) {
      motMax = mots[i]; // On met à jour le mot le plus long
    }
  }

  console.log("Le mot le plus long est : " + motMax);
}








