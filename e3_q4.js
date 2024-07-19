class Shape {
    constructor() {
        if (new.target === Shape)
            throw new Error(" Cannot create the object directly from the abstract class ");
    }

    area() {
        // 

    }

    perimeter() {
        // 
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side
    }

    area() {
        return this.side * this.side;
    }
    perimeter() {
        return this.side * 4;
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.r = r;
    }
    area() {
        return Math.PI * this.r * this.r;
    }
    perimeter() {
        return 2 * Math.PI * this.r;
    }
}


// Implementing the classes

// This probably will cause error
try {
    const shape = new Shape();
} catch (e) {
    console.log(e.message);
}

// Implement Square
const square = new Square(5);
console.log(square.area());
console.log(square.perimeter());

//Implement Circle
const circle = new Circle(2);
console.log(circle.area());
console.log(circle.perimeter());