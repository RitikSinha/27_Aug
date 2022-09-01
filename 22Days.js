/**
22. Write a program which tells the number of days in a month.
 * 
 */
const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "october",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const index = (Math.random() * 11).toFixed(0);

const thirty = ["april", "june", "september", "november"];
const thirtyOne = [
  "january",
  "march",
  "may",
  "october",
  "july",
  "august",
  "december",
];
const feb = ["february"];
if (thirtyOne.includes(months[index])) {
  console.log(`${months[index]} is of 31 Days`);
} else if (thirty.includes(months[index])) {
  console.log(`${months[index]} is of 30 Days`);
} else {
  console.log(`${months[index]} is of 28/29 Days`);
}
