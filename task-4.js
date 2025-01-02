/*4. Checking if it's an Array
Instructions:
Create different variables, each containing either 
an array or a non-array value.
Now use isArray to check if each variable is an array.
Print a message to the console indicating whether each 
variable is an array or not.
*/

const food = "apple";
const number = [];
const age = 12;
const isStudent = true;

console.log(Array.isArray(food));
console.log(Array.isArray(number));
console.log(Array.isArray(age));
console.log(Array.isArray(isStudent));
