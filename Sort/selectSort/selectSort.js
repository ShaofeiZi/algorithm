const generateArray = require('../../util/arrayUtil');
// const S = [5, 2, 4, 6, 1, 3];

const S = generateArray(10000);

function selectSort(arr) {
    const len = arr.length;
    let minIndex;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if(i !== minIndex){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr;
}

console.time('选择排序耗时');
selectSort(S);
console.timeEnd('选择排序耗时');
