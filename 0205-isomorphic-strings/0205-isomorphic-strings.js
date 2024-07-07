/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;

    const sMap = new Map();
    const tMap = new Map();

    for(let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if(!sMap.has(charS) && !tMap.has(charT)) {
            sMap.set(charS, charT);
            tMap.set(charT, charS);
        } else {
            if(sMap.get(charS) !== charT || tMap.get(charT) !== charS) {
                return false;
            }
        }
    }

    return true;
    
};