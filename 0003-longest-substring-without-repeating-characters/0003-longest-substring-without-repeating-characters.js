/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let start = 0;  
    let seen = {};  
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (seen[char]) {
            
            start = Math.max(start, seen[char]);
        }
       
        seen[char] = i + 1;
  
        longest = Math.max(longest, i - start + 1);
    }
    return longest;
};