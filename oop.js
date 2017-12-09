var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.showMe = function () {
        console.log('我的名字叫：' + this.name + ',我的年龄是：' + 'this.age');
    };
    return Person;
}());
var p = new Person('adley', 12);
p.showMe();
