var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var array = ["1", "3"];
console.log(array);
var fruit;
(function (fruit) {
    fruit[fruit["apple"] = 0] = "apple";
    fruit[fruit["mango"] = 1] = "mango";
    fruit[fruit["orange"] = 2] = "orange";
})(fruit || (fruit = {}));
console.log(fruit[1]);
var fun = function (x, y) {
    return x * y;
};
console.log(fun(3, 6));
var fun2 = function (x, y) { return x * y; };
console.log(fun2(3, 4));
var MyClass = /** @class */ (function () {
    function MyClass(k) {
        this.j = k;
    }
    MyClass.prototype.value = function () { return this.j; };
    return MyClass;
}());
console.log(new MyClass(7).value());
var SuperClass = /** @class */ (function () {
    function SuperClass(x) {
        this.j = x;
    }
    SuperClass.prototype.valueSuperClass = function () {
        return this.j;
    };
    ;
    return SuperClass;
}());
var SubClass = /** @class */ (function (_super) {
    __extends(SubClass, _super);
    function SubClass(x, y) {
        var _this = _super.call(this, x) || this;
        _this.i = y;
        return _this;
    }
    SubClass.prototype.valueSubClass = function () {
        return "i = " + this.i + "  j = " + this.j;
    };
    return SubClass;
}(SuperClass));
console.log(new SubClass(1, 3).valueSubClass());
