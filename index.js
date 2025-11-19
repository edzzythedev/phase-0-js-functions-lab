/**
 * Junior Developer Budgeting Tool Functions
 *
 * This file contains the five core functions required for the lab.
 */

// Function 1: calculateTax - Calculates a 10% tax on the amount.
function calculateTax(amount) {
    const taxValue = amount * 0.10;
    return taxValue;
}

// Function 2: convertToUpperCase - Converts the input string to uppercase.
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// Function 3: findMaximum - Returns the larger of the two input numbers.
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

// Function 4: isPalindrome - Checks if a word is the same forward and backward (ignoring case).
function isPalindrome(word) {
    const lowerWord = word.toLowerCase();
    const reversedWord = lowerWord.split('').reverse().join('');
    return lowerWord === reversedWord;
}

// Function 5: calculateDiscountedPrice - Calculates the price after applying a percentage discount.
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountRate = discountPercentage / 100;
    const discountAmount = originalPrice * discountRate;
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };