/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let trigerStr = {}
    
    const patterns = pattern.split('')
    const ss = s.split(" ")
    
    if (patterns.length != ss.length) return false
    
    for(var index = 0; index < patterns.length; index++) {
        if (trigerStr[patterns[index]]) {
            if (trigerStr[patterns[index]] != ss[index]) return false
        } else {
            var tempKeys = Object.values(trigerStr);
          	if (tempKeys.includes(ss[index])) return false
            trigerStr[patterns[index]] = ss[index]
        }
    }
    return true
};