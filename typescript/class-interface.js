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
var NewRectangle = /** @class */ (function () {
    function NewRectangle(height, width) {
        this.height = height;
        this.width = width;
    }
    NewRectangle.prototype.getHeight = function () {
        return this.height;
    };
    NewRectangle.prototype.getWidth = function () {
        return this.width;
    };
    NewRectangle.prototype.getArea = function () {
        return this.height * this.width;
    };
    return NewRectangle;
}());
var NewSquare = /** @class */ (function (_super) {
    __extends(NewSquare, _super);
    function NewSquare(side) {
        return _super.call(this, side, side) || this;
    }
    return NewSquare;
}(NewRectangle));
var myRectangle = new NewRectangle(4, 5);
console.log("Area of rectangle with height[".concat(myRectangle.getHeight(), "] and width[").concat(myRectangle.getWidth(), "] is ").concat(myRectangle.getArea(), "."));
var mySquare = new NewSquare(4);
console.log("Area of square with side[".concat(mySquare.getHeight(), "] is ").concat(mySquare.getArea(), "."));
