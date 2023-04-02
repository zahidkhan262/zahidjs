let target = "a";
let word = ["aaab", "aaxy", "aayaabaa", "berr"]

function getWord(arr, target) {
    let count = 0;
    let output;
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        //    console.log(word, "word");
        let temp = 0;
        for (let j = 0; j < word.length; j++) {
            // console.log(word[j], "zahid icls")
            if (arr[i][j] === target) {
                temp++
                // console.log(temp, "temp")
            }
        }
        if (temp > count) {
            count = temp
            output = arr[i]
            console.log(output, "output")
            return output
        }
    }
}

console.log(getWord(word, target))