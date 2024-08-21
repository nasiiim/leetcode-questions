
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // check each column
    for(let i = 0; i < 9; i++) {
        let seen = {};
        for(let j = 0; j < 9; j++) {
            let num = board[j][i];
            if(num !== '.') {
                if(seen[num]) {
                    return false;
                }
                seen[num] = true;
            }
        }
    }
    
    // check each row
    for(let i = 0; i < 9; i++) {
        let seen = {};
        for(let j = 0; j < 9; j++) {
            let num = board[i][j];
            if(num !== '.') {
                if(seen[num]) {
                    return false;
                }
                seen[num] = true;
            }
        }
    }
    
    // check each 3 x 3 subgrid
    for(let i = 0; i < 9; i++) {
        let seen = {};
        for(let j = 0; j < 9; j++) {
            let r = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            let c = i * 3 % 9 + j % 3;
            let num = board[r][c];
            if(num !== '.') {
                if(seen[num]) {
                    return false;
                }
                seen[num] = true;
            }
        }
    }
    
    return true;
};