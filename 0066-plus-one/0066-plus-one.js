/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const joined = BigInt(digits.join(''))
    const digitsArray = String(joined+BigInt(1)).split('')
    return digitsArray
};

