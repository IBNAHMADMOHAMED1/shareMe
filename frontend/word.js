const caluclDiagonlOfMatrix = (matrix) => {
    let sum = 0;
    let sum2 = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
        sum2 += matrix[i][matrix.length - i - 1];
    }
    return sum;
}
console.log(caluclDiagonlOfMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));