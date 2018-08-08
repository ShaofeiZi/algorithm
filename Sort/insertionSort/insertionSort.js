const generateArray = require('../../util/arrayUtil');
// const S = [5, 2, 4, 6, 1, 3];
const S = generateArray(10000);

function insertionSort(S) {
    if (S.length <= 1) {
        return S;
    }
    for (let i = 1; i < S.length; i++) {
        let A = S[i];
        let j = i - 1;
        while (S[j] > A) {
            S[j + 1] = S[j];
            j--
        }
        S[j + 1] = A;
    }
    return S;
}

console.time('插入排序');
insertionSort(S);
console.timeEnd('插入排序');