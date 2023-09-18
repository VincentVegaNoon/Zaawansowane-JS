const { add } = require("./components/add");
const { multiply, description } = require("./components/multiply");
// const multiply = require("./components/multiply");

const result = add(2, 43, 4);
const result2 = multiply(2, 3, 4);
console.log(result);
console.log(result2);
console.log(description);
