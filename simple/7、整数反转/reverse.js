/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const edge = 2 ** 31;
    const max = edge - 1;
    const min = -edge;

    let result = (x > 0 ? 1 : -1) * String(x).split('').filter(x => x !== '-').reverse().join('');
    return result > max || result < min ? 0 : result;
};


//时间最短方案
var reverse = function (x) {
    let result = 0;
    while (x) {
        result = result * 10 + x % 10;
        x = x / 10 >> 0;
    }
    if (result < (-1) * Math.pow(2, 31) || result > Math.pow(2, 31)) {
        return 0;
    }

    return result;
};