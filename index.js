// 1. Function to calculate the sum of two numbers
function calculateSum(a, b) {
    return a + b;
}
// Testing the functions
console.log(calculateSum(3, 5)); // Output: 8






// 2. Function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}
// Testing the functions
console.log(isEven(4)); // Output: true
console.log(isEven(5)); // Output: false






// 3. Function to find the maximum number in an array
function findMax(arr) {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
}
// Testing the functions
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5






// 4. Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
// Testing the functions
console.log(reverseString("hello")); // Output: "olleh"







// 5. Function to filter odd numbers from an array
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
// Testing the functions
console.log(filterOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]








// 6. Function to sum all elements in an array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
// Testing the functions
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15







// 7. Function to sort an array in ascending order
function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}
// Testing the functions
console.log(sortArray([3, 2, 5, 1, 4])); // Output: [1, 2, 3, 4, 5]






// 8. Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// Testing the functions

console.log(capitalizeFirstLetter("hello")); // Output: "Hello"








