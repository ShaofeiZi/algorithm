/**
 * 10进制转26进制
 * @param num 自然数（如果无效，则返回空字符串）
 * @returns {string}
 */
function base10to26(num) {
    var str="";
    while (num > 0){
        // 取余数 不能被26整除的是这一位上的字母
        const m = num % 26;
        // 26位字母之外的
        if (m === 0){
            m = 26;
        }
        str = String.fromCharCode(m + 64) + str;
        // 加完之后减去已经被用过的 重新来
        num = (num - m) / 26;
    }
    return str;
}

/**
 * 将指定的26进制表示转换为自然数。映射关系：[A-Z] ->[1-26]。
 * @param alphabet 26进制表示（如果无效，则返回0）
 * @returns {number}
 */
function base26to10(alphabet) {
    let n = 0;
    // 分割字符串为数组
    let s = Array.from(alphabet);
    let j = 0;
    // length 增加一位代表位数加一   变成数字的话 *26
    for (let i = alphabet.length - 1, j = 1; i >= 0; i--, j *= 26) {
        let c = s[i].toUpperCase();
        if (c < 'A' || c > 'Z') {
            return 0;
        }
        // A的ASC码表示的是65
        // 减去64是为了从1开始计数
        n += (c.charCodeAt(0) - 64) * j;
    }
    return n;
}
function main() {
    const alphabet ='aaa';
    let temp = base26to10(alphabet);
    console.log(temp);
    console.log(base10to26(temp));
}
main();