class Rectangle {
    private height: number;
    private width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    getHeight(): number {
        return this.height;
    }

    getWidth(): number {
        return this.width;
    }


    getArea(): number {
        return this.height * this.width;
    }

}

class Square extends Rectangle {

    constructor(side: number) {
        super(side, side);
    }

}

var rectangle = new Rectangle(4, 5);
console.log(`Area of rectangle with height[${rectangle.getHeight()}] and width[${rectangle.getWidth()}] is ${rectangle.getArea()}.`);

var square = new Square(4);
console.log(`Area of square with side[${rectangle.getHeight()}] is ${square.getArea()}.`);
