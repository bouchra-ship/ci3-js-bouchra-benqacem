function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return [...quicksort(left), pivot, ...quicksort(right)];
}

let result = quicksort([10, 5, 2, 8, 7, 3, 1]);
console.log(result);