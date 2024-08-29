/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let A = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        for (m = 0; m < matrix.length; m++) {
          A[m][j] = 1;
        }


        for (let n = 0; n < matrix[0].length; n++) {
          A[i][n] = 1;
        }
      };
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (A[i][j]) {
        matrix[i][j] = 0
      }
    }
  }
};