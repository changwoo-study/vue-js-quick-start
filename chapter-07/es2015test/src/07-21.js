var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var num = Math.round(Math.random() * 20);
        var isValid = num % 2;
        if (isValid) {
            resolve(num);
        } else {
            reject(num);
        }
    }, 2000);
});

p.then(function (num) {
    console.log('odd number: ' + num);
}).catch(function () {
    console.log('even number:' + num)
});

console.log('odd/even number ~20');
console.log('result in 2 seconds');
