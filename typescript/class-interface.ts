interface Shape {
    getArea(): number;
}

class NewRectangle implements Shape{
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

class NewSquare extends NewRectangle {

    constructor(side: number) {
        super(side, side);
    }

}

var myRectangle = new NewRectangle(4, 5);
console.log(`Area of rectangle with height[${myRectangle.getHeight()}] and width[${myRectangle.getWidth()}] is ${myRectangle.getArea()}.`);

var mySquare = new NewSquare(4);
console.log(`Area of square with side[${mySquare.getHeight()}] is ${mySquare.getArea()}.`);
