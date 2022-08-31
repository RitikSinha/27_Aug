/**
 * 20. Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
 */

let marks = (Math.random() * 100).toFixed(0);
if (marks >= 80 && marks <= 100) {
  console.log(`you scored ${marks}.You passed with A Grade.`);
} else if (marks >= 70 && marks <= 89) {
  console.log(`you scored ${marks}.You passed with B Grade.`);
} else if (marks >= 60 && marks <= 69) {
  console.log(`you scored ${marks}.You passed with C Grade.`);
} else if (marks >= 50 && marks <= 59) {
  console.log(`you scored ${marks}.You passed with D Grade.`);
} else if (marks >= 0 && marks <= 49) {
  console.log(`you scored ${marks}.Work Hard! You got a F`);
}
