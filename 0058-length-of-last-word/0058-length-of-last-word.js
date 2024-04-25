/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   const newS = s.trim().split(' ') 
   console.log(newS)
   let lastWord = newS[newS.length-1]
    
      return lastWord.length
   
 
};