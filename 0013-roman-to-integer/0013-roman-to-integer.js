/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const ronamNums = {
 'I':1,
 'V':5,
 'X':10,
 'L':50,
 'C':100,
 'D':500,
 'M':1000
    };

let num = 0;

for(let i= 0; i < s.length; i++){
    const cur = ronamNums[s[i]];
    const next = ronamNums[s[i+1]];
    if(cur<next){
        num += next - cur
        i++
    } else {
        num += cur
    }
}
 return num
};