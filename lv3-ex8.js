function palindrome(n) {
  let str = n.toString();
  return str === str.split('').reverse().join('');
}

function newPalindrome(n) {
  while (!palindrome(n)) {
    n++;
  }
  return n;
}

let result = newPalindrome(123);
console.log(result);