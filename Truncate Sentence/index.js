/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    //truncate is to cut a string

// first split the words 
    let words = s.split( " ")
    // console.log(words)
    //use slice method to truncate and the join
    let str = words.slice(0,k).join(" ")
    return str
 

};

console.log(truncateSentence("Hello how are you Contestant", 4));