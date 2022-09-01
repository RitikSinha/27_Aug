/**
 * 27. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
 */
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a, b) => a - b);

function findMedian(arr) {
  let left = 0;
  let right = ages.length - 1;
  let mid = parseInt((left + right) / 2);
  console.log("Median:");

  arr.length % 2 === 0
    ? console.log(arr[mid], arr[mid + 1])
    : console.log(arr[mid]);
}
console.log(ages);
findMedian(ages);
function findAverage(arr) {
  let sum = 0;
  for (ele of arr) {
    sum = sum + ele;
  }
  console.log("Average: ", sum / arr.length);
}
function minMaxRange(arr) {
  let min = arr[0];
  let max = arr[0];
  for (ele of arr) {
    if (min > ele) {
      min = ele;
    }
    if (max < ele) {
      max = ele;
    }
  }
  console.log(`min:${min} max:${max} range:${max - min}`);
}
minMaxRange(ages);
findAverage(ages);
