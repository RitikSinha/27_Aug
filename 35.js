/**
35. Write a functions which checks if all items are unique in the array.
 * 
 */
const arr = [11, 13, 2, 3, 5, 11];
const arr2 = [11, 13, 2, 3, 5];
function isUnique(arr) {
  let set = new Set(arr);
  return set.size === arr.length;
}
console.log(isUnique(arr2));
