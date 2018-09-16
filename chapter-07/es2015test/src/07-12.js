var s1 = new Set();
s1.add('사과');
s1.add('배');
s1.add('사과');
s1.add('포토');
console.log(s1);

var john = new Set(['사과', '포도', '배']);
var susan = new Set(['파인애플', '키위', '배']);

var union = new Set([...john.values(), ...susan.values()]);
console.log(union);


var intersection = new Set([...john.values()].filter(e => susan.has(e)));
console.log(intersection);


var diff = new Set([...john.values()].filter(e => !susan.has(e)));
console.log(diff);
