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
console.log(converUpperToLower("zAhiD"));
console.log('-----------------reverse string---------------------')

const reverseString = (str) => {
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}
console.log(reverseString('zahid'), "reverse")

console.log('-----------------duplicate char---------------------')
const duplicateCharInString = (str) => {
    let dupStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            dupStr += str[i]
        }
    }
    return dupStr

}
console.log(duplicateCharInString('zaahiid'), "duplicate char")

console.log('-----------------check  anagram---------------------')

const a = 'nidia'
const b = 'indiaa'
const checkAnagrams = (str1, str2) => {

    let newA = ''
    let newB = ''
    if (str1.length !== str2.length) {
        console.log('not matched')
    }
    newA = str1.split('').sort().join('')
    newB = str2.split('').sort().join('')

    if (newA === newB) {
        console.log(true, "true")
    } else {
        console.log(false, "false")
    }
    // return newA, newB

}
checkAnagrams(a, b)
