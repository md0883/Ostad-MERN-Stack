function calculateDifference(a, b) {
  return a - b;
}
console.log("Difference:", calculateDifference(10, 4));

function isOdd(num) {
  return num % 2 !== 0;
}
console.log("Is 7 odd?", isOdd(7));

function findMin(arr) {
  return Math.min(...arr);
}
console.log("Minimum:", findMin([5, 2, 9, 1]));

function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log("Even numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));

function sortArrayDescending(arr) {
  return [...arr].sort((a, b) => b - a);
}
console.log("Sorted descending:", sortArrayDescending([3, 8, 1, 6]));

function lowercaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("Lowercased first letter:", lowercaseFirstLetter("HelloWorld"));

function findAverage(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}
console.log("Average:", findAverage([10, 20, 30, 40]));

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Is 2024 leap year?", isLeapYear(2024));
