/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;

    for (let i = 0; i < items.length; i++) {
        if (ruleKey === "type" && items[i][0] === ruleValue) {
            count++;
        } else if (ruleKey === "color" && items[i][1] === ruleValue) {
            count++;
        } else if (ruleKey === "name" && items[i][2] === ruleValue) {
            count++;
        }
    }

    return count;
};

console.log(countMatches([
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"]
], "color", "silver"));
