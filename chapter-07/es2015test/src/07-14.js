class Person {
    constructor(name, tel, address) {
        this.name = name;
        this.tel = tel;
        this.address = address;

        if (Person.count) {
            Person.count++;
        } else {
            Person.count = 1;
        }
    }

    static getPersionCount() {
        return Person.count;
    }

    toString() {
        return `name=${this.name}, tel=${this.tel}, address=${this.address}`;
    }
}

var p1 = new Person('lmr', '010-222-3332', 'gyounggi');
var p2 = new Person('hgd', '010-222-3333', 'seoul');

console.log(p1.toString());
console.log(Person.getPersionCount());
