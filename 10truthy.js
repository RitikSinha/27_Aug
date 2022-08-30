/**
 * 10. Boolean value is either true or false.

    - Write three JavaScript statement which provide truthy value.
    - Write three JavaScript statement which provide falsy value.
 */
//truthy value
let obj = {};
console.log(Boolean(obj));
let arr = [];
console.log(Boolean(arr));
let str = "non empty string";
console.log(Boolean(str));

//falsy value
let nullVal = null;
console.log(Boolean(nullVal));
let emptyStr = "";
console.log(Boolean(emptyStr));
let undefinedVal = undefined;
console.log(Boolean(undefinedVal));
