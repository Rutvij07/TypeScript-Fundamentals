var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.UserName(this.name);
    }
    User.prototype.UserName = function (name) {
        console.log('Username is', name);
    };
    User.prototype.AvengerName = function (text, name) {
        console.log('Avenger is', name);
        console.log(name + ' said ' + text);
    };
    return User;
}());
var Avenger = /** @class */ (function (_super) {
    __extends(Avenger, _super);
    function Avenger(text, name, age) {
        var _this = _super.call(this, name, age) // this function is mandatory it contains parameter of class which it inherites
         || this;
        _this.text = text;
        _this.AvengerName(_this.text, _this.name);
        return _this;
    }
    Avenger.prototype.AvengerName = function (text, name) {
        _super.prototype.AvengerName.call(this, text, name);
    };
    return Avenger;
}(User));
var thanos = new User('Thanos', 23);
var avenger = new Avenger('Earth is on holiday', 'Ironman', 12);
