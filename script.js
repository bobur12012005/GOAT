let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22];

let string = arr.filter((str) => typeof str === "string");
console.log(string.length);

let number = arr.filter((num) => typeof num === "number");
console.log(number.length);

let others = arr.filter((oth) => typeof oth !== "string" && typeof oth !== "number");
console.log(others.length);