function match(tab1, tab2) {
  return tab1.filter(element => tab2.includes(element));
}

let result = match([1, 2, 3, 4], [3, 4, 5, 6]);
console.log(result);