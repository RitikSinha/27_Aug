/**
30. Write a script which generates a random hexadecimal number.
 * 
 */
function genHexa() {
  const letters = ["A", "B", "C", "D", "E", "F"];
  const r = (Math.random() * 5).toFixed(0);
  const letter = letters[r];
  const num = (Math.random() * 1000).toFixed(0);
  return `0x${letter}${num}`;
}
console.log(genHexa());
console.log(parseInt(genHexa()));
