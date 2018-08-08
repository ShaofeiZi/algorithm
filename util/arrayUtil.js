/**
 * 生成随机数组
 * @param Quantity
 */
function generateArray(Quantity) {
    const S = [];
    let n = 0;
    while (n < 10000) {
        S.push(Math.ceil(Math.random() * 100));
        ++n;
    }
    return S;

}
module.exports = generateArray;