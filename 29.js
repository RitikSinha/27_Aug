/**
29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
 * 
 */
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i < 100; i++) {
  i % 2 == 0 ? (evenSum = i + evenSum) : (oddSum = i + oddSum);
}
console.log(`even sum:${evenSum} odd sum :${oddSum}`);
