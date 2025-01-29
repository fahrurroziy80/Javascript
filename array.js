function tampilkanArray(arr) {
    return arr.reduce((total, current) => total + current, 0);
  }


console.log(tampilkanArray([1, 2, 3, 4]));  // Output: 10
console.log(tampilkanArray([5, 10, 15]));   // Output: 30