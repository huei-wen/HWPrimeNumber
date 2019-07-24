function getPrime(start, end) {
    let prime = [];

    for (let i = start; i <= end; i++) {
        if (doCaculate(i)) {
            if (i != 1) {
                prime.push(i);
            }
        }
    }
    return prime;
}
function doCaculate(num) {
    for (let j = 2; j < num; j++) {
        if (num % j == 0) {
            return false;
        }
    }
    return true;
}
