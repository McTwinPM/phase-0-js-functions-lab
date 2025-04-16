function calculateTax(amount) {
    return amount * .1
}
function convertToUpperCase(text) {
    return text.toUpperCase()
}
function findMaximum(num1, num2) {
   return Math.max(num1, num2)
}
function isPalindrome(word) {
    return word == word.split('').reverse().join('')
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - discountPercentage
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };