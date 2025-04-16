function palindrome(chaine) {
  let chaineFiltrée = chaine.toLowerCase().replace(/[^a-z]/g, '');
  let chaineInversée = chaineFiltrée.split('').reverse().join('');
  return chaineFiltrée === chaineInversée;
}