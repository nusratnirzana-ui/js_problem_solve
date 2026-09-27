function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
const slowSquare = (num) => {
    for (let i = 0; i < 100000000; i++) {} 
    return num * num;
};

const fastSquare = memoize(slowSquare);
console.log(fastSquare(5));
console.log(fastSquare(5)); 