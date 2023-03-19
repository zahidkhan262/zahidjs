let data = [20, 20, 40, 2, 30, 50, 2, 30, 55, 50, 1, 6, 9, 9]





const findDuplicateValue = (arr) => {
    // let duplicate = [];
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 1; j <= i; j++) {
    //         if (arr[i] == arr[j]) {
    //             duplicate.push(arr[j])
    //         }
    //     }
    // }
    // return duplicate
    const hash = {}
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = arr[i]
    }
    return Object.values(hash)

}
console.log(findDuplicateValue(data))
