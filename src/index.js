module.exports = function getZerosCount(number, base) {
    let range = [2, base];

    let result = number;
    let system = base;
    let power;
    let k;
    let count;

    let i = range[0];
    while(i <= range[1]) {
        if(system % i === 0) {
            power = 0;
            while(system % i === 0) {
                power++;
                system = Math.floor(system / i);
            }
            count = 0;
            k = number;
            do {
                count += Math.floor(k / i);
                k = Math.floor(k / i);
            } while (k !== 0);
            result = Math.min(result, Math.floor(count / power));
        }
        i++;
    }
    return result;
}