const sortNumber = require('../util/sortNumber');
const a=[7, 2, 3, 2, 5, 1, 1];
// const a = [];
let n = 0;
console.time('造数');
// while (n < 10000000) {
//     a.push(Math.ceil(Math.random() * 1000));
//     n++;
// }
console.timeEnd('造数');


function unique_old_old(S) {
    S = S.sort(sortNumber);
    let L = 0;
    const arr=[];
    while (L < S.length) {
        let R = L + 1;
        for (R; R < S.length; ++R) {
            if (S[R] !== S[L]) {
                break;
            }
        }
        // console.log(`${S[R]}:${R - L}`);
        ++L;
    }
    return arr;
}

function unique_old(S) {
    S = S.sort(sortNumber);
    const arr=[];
    for (let L = 0, R; L < S.length; L = R) {
        for (R = L + 1; R < S.length; ++R) {
            if (S[R] !== S[L]) {
                arr.push(S[R]);
                break;
            }
        }
        // console.log(`${S[R]}:${R - L}`)
    }
    return arr;
}


function unique(S) {
    S = S.sort(sortNumber);
    const arr=[];
    let L, R;
    for (L = 0, R = 0; R < S.length; ++R) {
        if (S[R] !== S[L]) {
            L = R;
            arr.push(S[R]);
            break;
        }
    }
    return arr;
}

function ES6Unique(S) {
    return Array.from(new Set(S));

}

function ES6UniqueTow(S) {
    return [...new Set(S)];
}

console.time('Example old_old:');
console.log(unique_old_old(a));
console.timeEnd('Example old_old:');
console.time('Example old:');
console.log(unique_old(a));
console.timeEnd('Example old:');
console.time('Example:');
console.log(unique(a));
console.timeEnd('Example:');
console.time('Example ES6:');
console.log(ES6Unique(a));
console.timeEnd('Example ES6:');
console.time('Example ES6 2:');
console.log(ES6UniqueTow(a));
console.timeEnd('Example ES6 2:');
