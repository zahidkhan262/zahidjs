let name = "zahid khan"
let name2 = "  what is your name   "

// find the last sentance word length

const findLastWordLen = (strs) => {
    let str = strs.trim();
    let count = 0
    for (let i = str.length - 1; i > 0; i--) {
        if (str[i] !== " ") {
            count++
        } else {
            return count
        }
    }
}
console.log(findLastWordLen(name))
console.log(findLastWordLen(name2));


const converUpperToLower = (str) => {
    let newStr = ""
    for (let ele of str) {
        let char = str.toUpperCase();
        if (char === ele) {
            newStr += ele.toLowerCase()
        } else {
            newStr += ele.toLowerCase()
        }
    }
    return newStr;
}
console.log(converUpperToLower("zAhiD"))