function compter(chaine) {
  let occurrences = {};
  
  for (let char of chaine) {
    if (occurrences[char]) {
      occurrences[char]++;
    } else {
      occurrences[char] = 1;
    }
  }
  
  return occurrences;
}