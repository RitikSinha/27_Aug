/**
19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
 * 
 */
let number = (Math.random() * 100).toFixed(0);
console.log(number & (1 == 1) ? `${number} is odd` : `${number} is even`);
