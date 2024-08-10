/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    let result = '';
    for (i = 0; i < numRows; i++) {
        let j = i;
        let diff1;
        let diff2;
        
        if (i === 0 || i === numRows - 1) {
            // calculate diff for peaks of ZigZag (top or bottom)
            diff1 = numRows * 2 - 2;
            diff2 = diff1;
        } else {
            // calculate diff for middle
            diff1 = (numRows - i) * 2 - 2;
            diff2 = (numRows - ((numRows - i))) * 2;
        }
        const diff = [diff1, diff2];
        let n = 0;
        while (s[j]) {
            result = result + s[j];
            j = j + diff[n % 2];
            n++;
        }
    }

    return result;
};