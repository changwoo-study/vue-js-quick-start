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


class Employee extends Person {
    constructor(name, tel, address, empno, dept) {
        super(name, tel, address);
        this.empno = empno;
        this.dept = dept;
    }

    toString() {
        return super.toString() + `, empno=${this.empno}, dept=${this.dept}`;
    }

    getEmpInfo() {
        return `${this.empno}: ${this.name}은 ${this.dept} 부서입니다.`;
    }

}

let e1 = new Employee('lmr', '010-222-2121', '서울시', 'A12311', '회계팀');
console.log(e1.getEmpInfo());
console.log(e1.toString());
console.log(Person.getPersionCount());
