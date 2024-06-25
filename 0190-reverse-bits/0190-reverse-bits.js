/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {{
     let bin = n.toString(2);
     while (bin.length < 32) {
          bin = "0" + bin;
     }
     bin = bin.split("").reverse().join("");
     return parseInt(bin, 2);
};
};