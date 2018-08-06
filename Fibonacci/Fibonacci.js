const N = 40;
/**
 * 最简单的写法，直接利用递归调用
 * @param n
 * @returns {*}
 */
function fibonacci_simple(n) {
    if (n <= 0) {
        return 0
    } else if (n === 1) {
        return 1
    }
    return fibonacci_simple(n-1)+fibonacci_simple(n-2);
}


console.time('fibonacci_simple暴力递归用时');
const simpleTime = fibonacci_simple(N);
console.timeEnd('fibonacci_simple暴力递归用时');
console.log('暴力递归结果'+simpleTime);
// fibonacci_simple暴力递归用时: 1513.972ms

/**
 * 备忘录法 使用列表缓存中间结果
 * @param n
 * @returns {number}
 */
let List = [0,1,1];
function fibonacci_list(n) {
    while (List.length<n+1){
        let ln = List.length;
        List.push(List[ln-1]+List[ln-2])
    }
    if(n<0){
        return List[0]
    }else {
        return List[n];
    }
}
console.time('fibonacci_list备忘录缓存用时');
const listTime = fibonacci_list(N);
console.timeEnd('fibonacci_list备忘录缓存用时');
console.log('备忘录缓存结果'+listTime);
// fibonacci_list备忘录缓存用时: 0.083ms



