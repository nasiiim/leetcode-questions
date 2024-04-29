/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
 const newS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = newS.length - 1;

  while (left < right) {
    if (newS[left] !== newS[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};









