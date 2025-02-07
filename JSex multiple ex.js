// add two numbers
function addNumbers(a, b) {
    return a + b;
}

// min to sec
function MinToSec (min){
    return min * 60;
}

// find number in arr
function boom(arr) {
    for (let x7 of arr) {
        if (x7.toString().includes('7')) {
            return "Boom";
        }
    }
    return "No Boom";
}

// Add up the Numbers from a Single Number
function sumNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// MAtchstick house
function matchHouses(step) {
    if (step <= 0) return 0;
    return (5 * step) + 1;
}

// shiftToLeft
function shiftToLeft(a, b) {
    return a * (1 << b);
}

// get date and check
function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
}

console.log(timeForMilkAndCookies(new Date(2013, 11, 24))); // true
console.log(timeForMilkAndCookies(new Date(2013, 0, 23)));  // false

// find elements in arr
function countTrue(arr) {
    return arr.filter(value => value === true).length;
}

console.log(countTrue([true, false, false, true, false])); // Output: 2
console.log(countTrue([false, false, false, false]));      // Output: 0

// A Redundant Function
function redundant(str) {
    return function() {
        return str;
    };
}

const test1 = redundant("apple");
console.log(test1()); // Output: "apple"
const test2 = redundant("pear");
console.log(test2()); // Output: "pear"

// RegEx Exercise: An empty string
const REGEXP = /^$/;

console.log(REGEXP.test(""));      // Output: true (empty string)
console.log(REGEXP.test(" "));     // Output: false (contains a space)

// Tile Teamwork Tactics
function possibleBonus(a, b) {
    return b > a && (b - a) <= 6;
}

console.log(possibleBonus(3, 7)); // Output: true
console.log(possibleBonus(1, 9)); // Output: false

// shiftToRight
function shiftToRight(a, b) {
    return Math.floor(a / Math.pow(2, b));
}

console.log(shiftToRight(80, 3));   // Output: 10
console.log(shiftToRight(-24, 2));  // Output: -6

// Perimeters with a Catch
function perimeter(l, num) {
    return (l.charCodeAt(0) === 115) * (4 * num) + (l.charCodeAt(0) === 99) * (6.28 * num);
}

console.log(perimeter("s", 7)); // Output: 28
console.log(perimeter("c", 4)); // Output: 25.12

// Find Number of Digits in Number
function num_of_digits(num) {
    return Math.abs(num).toString().length;
}

console.log(num_of_digits(1000));         // Output: 4
console.log(num_of_digits(12));           // Output: 2

// Number of Boomerangs
function countBoomerangs(arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
            count++;
        }
    }
    
    return count;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));  // Output: 2
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));  // Output: 1

// Oddish vs. Evenish
function oddishOrEvenish(num) {
    const sum = num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
    return sum % 2 === 0 ? "Evenish" : "Oddish";
}

console.log(oddishOrEvenish(43));    // Output: "Oddish"
console.log(oddishOrEvenish(121));   // Output: "Evenish"

// How Many Days Between Two Dates
function getDays(date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.abs((date2 - date1) / oneDay);
}

console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019"))); // Output: 6
console.log(getDays(new Date("March 1, 2020"), new Date("March 1, 2021"))); // Output: 366 (leap year)

// Length of a Nested Array
function getLength(arr) {
    return arr.reduce((count, item) => count + (Array.isArray(item) ? getLength(item) : 1), 0);
}

console.log(getLength([1, [2, 3]]));               // Output: 3
console.log(getLength([]));                       // Output: 0 (empty array)

// Case and Index Inverter
function invert(str) {
    return str
        .split('') // Convert string to array of characters
        .reverse() // Reverse the order of characters
        .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()) // Swap case
        .join(''); // Convert back to string
}

console.log(invert("dLROW YM sI HsEt"));    // Output: "TeSh iS my worlD"
console.log(invert("ytInIUgAsnOc"));       // Output: "CoNSaGuiNiTY"
console.log(invert("step on NO PETS"));    // Output: "step on NO PETS"
console.log(invert("XeLPMoC YTiReTXeD"));  // Output: "dExtErIty cOmplEx"

// Numbers in Strings
function numInStr(arr) {
    return arr.filter(str => /\d/.test(str));
}

console.log(numInStr(["1a", "a", "2b", "b"])); // Output: ["1a", "2b"]
console.log(numInStr(["abc", "abc10"])); // Output: ["abc10"]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // Output: ["ab10c", "a10bc"]
console.log(numInStr(["this is a test", "test1"])); // Output: ["test1"]
console.log(numInStr(["no numbers here", "pure text"])); // Output: []

// Combinations
function combinations(...groups) {
    return groups.reduce((total, num) => total * num, 1);
}

console.log(combinations(2, 3));        // Output: 6
console.log(combinations(3, 7, 4));     // Output: 84

// Positive Dominant
function isPositiveDominant(arr) {

    let unique = new Set(arr); // Remove duplicates

    let posCount = 0, negCount = 0;

    for (let num of unique) {

        if (num > 0) posCount++;
        if (num < 0) negCount++;

    }
    return posCount > negCount;
}

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4])); // false
console.log(isPositiveDominant([5, 99, 832, -3, -4])); // true

// Calculate the Total Price of Groceries
function getTotalPrice(groceries) {
    return groceries.reduce((total, item) => total + (item.quantity * item.price), 0);
}

// Example usage:
console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
])); // Output: 1.5

console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
])); // Output: 4

console.log(getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
])); // Output: 4.5

console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
])); // Output: 10.4

console.log(getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
])); // Output: 0.3

// Reverse the Odd Length Words
function reverseOdd(str) {
    return str.split(' ') // Split the string into words
        .map(word => word.length % 2 === 1 ? word.split('').reverse().join('') : word) // Reverse if odd length
        .join(' '); // Join back into a string
}

// Example usage:
console.log(reverseOdd("Bananas")); // Output: "sananaB"
console.log(reverseOdd("One two three four")); // Output: "enO owt eerht four"

// Pandigital Numbers
// A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
function isPandigital(num) {
    return new Set(num.toString()).size === 10 && [...num.toString()].includes('0');
}

console.log(isPandigital(98140723568910));  // Output: true
console.log(isPandigital(90864523148909));  // Output: false (7 is missing)

// Check If the Brick Fits through the Hole
// Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).
function doesBrickFit(a, b, c, w, h) {
    // Check if any two dimensions of the brick fit within the hole's width & height
    return (a <= w && b <= h) || (a <= h && b <= w) ||
           (a <= w && c <= h) || (a <= h && c <= w) ||
           (b <= w && c <= h) || (b <= h && c <= w);
}

console.log(doesBrickFit(1, 2, 1, 1, 1));  // Output: true
console.log(doesBrickFit(1, 2, 2, 1, 1));  // Output: false

// When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.
// Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:
// It takes 1 second to switch between pencils.
// It takes 2 seconds to color a square.
// See the example below for clarification.
// color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14
// There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// 10 + 4 = 14
// Examples
// colorPatternTimes(["Blue"]) ➞ 2
// colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11
// colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13

// Switching Between Pencils
function colorPatternTimes(cols) {
    if (cols.length === 0) return 0;
    
    let time = cols.length * 2; // 2 seconds per square
    let switches = 0;

    for (let i = 1; i < cols.length; i++) {
        if (cols[i] !== cols[i - 1]) {
            switches++;
        }
    }

    return time + switches;
}

console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])); // Output: 13
console.log(colorPatternTimes([])); // Output: 0

// Frequency Distribution
// Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.
function getFrequencies(arr) {
    return arr.reduce((freq, item) => {
        freq[item] = (freq[item] || 0) + 1;
        return freq;
    }, {});
}

console.log(getFrequencies(["A", "B", "A", "A", "A"])); // Output: { A: 4, B: 1 }
console.log(getFrequencies([1, 2, 3, 3, 2])); // Output: { "1": 1, "2": 2, "3": 2 }

// RegEx: Character Classes X ⁠- \W
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
// Here are a list of the characters classes in JavaScript:
// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
function countDivs(str) {
    return (str.match(/<div\W/g) || []).length;
}

console.log(countDivs("<div>Hello.</div><div>My name is <b>George</b>.</div>")); // Output: 2
console.log(countDivs("No div here")); // Output: 0

// Up the Hill, Down the Hill
function aveSpd(uphillTime, uphillRate, downhillRate) {
    let uphillTimeHr = uphillTime / 60; // Convert uphill time to hours
    let distance = uphillRate * uphillTimeHr; // Calculate one-way distance
    let downhillTimeHr = distance / downhillRate; // Time for downhill
    
    return (2 * distance) / (uphillTimeHr + downhillTimeHr); // Average speed formula
}

console.log(aveSpd(18, 20, 60)); // Output: 30
console.log(aveSpd(30, 10, 30)); // Output: 15

// Layers in a Rug
function countLayers(rug) {
    let uniqueLayers = new Set(rug);
    return uniqueLayers.size;
}

console.log(countLayers([
  "AAAA",
  "ABBA",
  "AAAA"
])); // Output: 2

console.log(countLayers([
  "AAAAAAAAA",
  "ABBBBBBBA",
  "ABBAAABBA",
  "ABBBBBBBA",
  "AAAAAAAAA"
])); // Output: 3

// Find Value in a Binary Tree
function valueInTree(tree, value) {
    if (!tree) return false; // Base case: null (empty node)

    const [val, left, right] = tree; // Destructure the tree

    if (val === value) return true; // If the root node has the value, return true

    return valueInTree(left, value) || valueInTree(right, value);
}

const arr1 = [3, [8, [5, null, null], null], [7, null, null]];
const arr2 = [10, [20, [30, null, null], [40, null, null]], [50, null, null]];

console.log(valueInTree(arr1, 5));  // Output: true
console.log(valueInTree(arr1, 9));  // Output: false

// fibonacci string
function Fibonacci(){
    let number1 = 0;
    let number2 = 1;
    
      let current = number1 + number2;
      number1 = number2;
      number2 = current;
      console.log(current);
}

for (let i = 0; i < 10; i++) {
  Fibonacci();
}
