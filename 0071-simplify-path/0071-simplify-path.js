/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stk = [];
    for (const s of path.split('/')) {
        if (s === '' || s === '.') {
            continue;
        }
        if (s === '..') {
            if (stk.length) {
                stk.pop();
            }
        } else {
            stk.push(s);
        }
    }
    return '/' + stk.join('/');
};