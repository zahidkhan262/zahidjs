let data = [20, 20, 40, 2, 30, 50, 2, 30, 55, 50, 1, 6, 9, 9]

const findDuplicateValue = (arr) => {
    const hash = {}

    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = arr[i]
        console.log(hash, "zahid")
    }
    return Object.values(hash)

}
console.log(findDuplicateValue(data))
