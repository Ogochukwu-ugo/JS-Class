class Rectangle {
    constructor(length, height, breath) {
        this.length = length;
        this.height = height;
        this.breath = breath;
    }

    calculateArea() {
        return this.length * this.height;
    }   

    calculatePerimeter() {
        return 2 * (this.length + this.height)
    }
}

let rectangle1 = new Rectangle(20, 10, 15);

console.log(rectangle1.calculateArea(), rectangle1.calculatePerimeter());