function iterative_Collatz(n) {
    if (n < 1) {
        return 0;
    }
    let L = 1;
    while (n !== 1) {
        n = (n % 2 === 0) ? n / 2 : 3 * n + 1;
        ++L;
    }
    return L;
}

function memoized_Collatz(v, n) {
    // 如果n不在数组v的范围之内, 先转换到合理范围之内并计算偏移D.
    let D = 0;
    while (n >= v.length) {
        n = (n % 2 === 0) ? n / 2 : 3 * n + 1;
        ++D;
    }
    // 对v[n]进行赋值, 注意此处n在数组v的范围之内, 直接递归加1赋值即可.
    if (v[n] === 0 && n > 0) {
        v[n] = memoized_Collatz(v, (n % 2 === 0) ? n / 2 : 3 * n + 1) + 1;
    }
    // 返回值是原有的n对应的序列长度, 应加上偏移量D.
    return v[n] + D;
}

function main() {
    // 利用备忘录保存已算出的值, 适合多次求解.
    let v = [];
    v[1] = 1;
    // 测试迭代和备忘录计算结果是否一致, 测试范围为[1, max].
    let max = 100000;
    let equal = true;
    for (let n = 1; n <= max; ++n) {
        if (iterative_Collatz(n) !== memoized_Collatz(v, n)) {
            equal = false;
        }
    }
    console.log(equal ? "相等" : "不相等")
}

main();