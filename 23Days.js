/**
23. Write a program which tells the number of days in a month, now consider leap year.
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
const isLeap = (Math.random() * 1).toFixed(0) == 1 ? true : false;

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
  console.log(
    isLeap
      ? ` It is a leap year.${months[index]} is of 29 Days`
      : ` It is non-leap year ${months[index]} is of 28 Days`
  );
}
