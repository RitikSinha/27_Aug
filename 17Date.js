/**
 * 
17. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm
 */
let myDate = new Date();
console.log(
  `${myDate.getFullYear()}-${myDate.getMonth()}-${myDate.getDate()} ${myDate.getHours()}:${myDate.getMinutes()}`
);
console.log(
  `${myDate.getDate()}-${myDate.getMonth()}-${myDate.getFullYear()}  ${myDate.getHours()}:${myDate.getMinutes()}`
);
console.log(
  `${myDate.getDate()}/${myDate.getMonth()}/${myDate.getFullYear()}  ${myDate.getHours()}:${myDate.getMinutes()}`
);
