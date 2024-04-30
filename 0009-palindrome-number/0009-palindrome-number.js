/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  
const reverse = x.toString().split('').reverse().join('')
   if(x == reverse){
       return true
   } else {
       return false
   }

};