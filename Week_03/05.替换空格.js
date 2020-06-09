/**
 * @param {string} s
 * @return {string}
 */
// 1. 字符串处理
var replaceSpace = function(s) {
    return s.split(' ').join('%20')
};

// 2. 新建数组：字符串类型不可更改
var replaceSpace = function(s) {
    const str = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            str.push('%20')
        } else {
            str.push(s[i])
        }
    }

    return str.join('')
}