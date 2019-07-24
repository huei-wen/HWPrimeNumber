function getPrime(start, end) {
    console.log("start:" + start);
    console.log("end:" + end);
    let prime = [];
    console.log(prime.toString());
    for (let i = start; i <= end; i++) {
        if (doCaculate(i)) {
            if (i != 1) {
                prime.push(i);
            }
        }
    }
    console.log(prime);
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
