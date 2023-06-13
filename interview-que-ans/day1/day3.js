//find number is prime or not

const checkNumberIsPrime = (num) => {
    if (num <= 1) {
        console.log('1 is composite number');
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
};
console.log(checkNumberIsPrime(21), "__")