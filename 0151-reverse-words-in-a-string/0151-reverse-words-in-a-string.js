/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
         if(s.length ===1) return s;
    const arr = s.trim().split(" ").filter(ele => ele.length >0);
    for(let i =0; i < arr.length /2 ; i++){
        if(arr[i].length > 0){
        [arr[i], arr[arr.length-1 - i]] = [arr[arr.length-1 - i], arr[i]]}
    }
    return arr.join(" ");
};