var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(userName, userPassword, helpPhrase) {
        this.userName = userName;
        this.userPassword = userPassword;
        this.helpPhrase = helpPhrase;
    }
    User.prototype.getUserPassword = function () {
        return this.userPassword;
    };
    return User;
}());
var UserHelper = /** @class */ (function (_super) {
    __extends(UserHelper, _super);
    function UserHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserHelper.prototype.getHelpPhrase = function () {
        return this.helpPhrase;
    };
    return UserHelper;
}(User));
var newUser = new UserHelper("grandeurkoe", "123456", "1-6");
console.log("Username: ".concat(newUser.userName));
console.log("Password: ".concat(newUser.getUserPassword()));
console.log("Help Phrase: ".concat(newUser.getHelpPhrase()));
