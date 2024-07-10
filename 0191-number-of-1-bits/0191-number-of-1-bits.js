/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count=0;
    let arr=n.toString(2);
    console.log(arr);
    for(let x of arr){
        if(x==='1'){
            count++;
        }
    }
    return count;
};