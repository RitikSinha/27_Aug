/**
34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
 * 
 */
//quadratic euation solver
function solver(a, b, c) {
  let d = (b * b - 4 * a * c).toFixed(2);
  let root1 = ((-b + Math.sqrt(d)) / 2) * a;
  let root2 = ((-b - Math.sqrt(d)) / 2) * a;
  if (root1 < 0) {
    root1 = root1 * -1;
  }
  if (root2 < 0) {
    root2 = root2 * -1;
  }
  console.log(`(x- ${root1})(x- ${root2})`);
}
solver(6, 17, 12);
