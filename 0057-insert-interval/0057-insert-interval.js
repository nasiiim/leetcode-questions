/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let ans = []

    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[1] < intervals[i][0]) {
            ans.push(newInterval, ...intervals.slice(i))
            return ans
        } else if (newInterval[0] > intervals[i][1]) {
            ans.push(intervals[i])
        } else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
        }
    }

    ans.push(newInterval)
    return ans
};