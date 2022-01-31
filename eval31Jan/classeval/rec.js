class Rectangle{
    constructor(side1,side2){
        this.side1 = side1;
        this.side2 = side2;
    }
    getArea = function () {
        return this.side1 * this.side2;
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side,side)
        this.side = side;
    }

    getPerimeter = function () {
        return this.side * 4;
    }

}

let nes = new Square(7);
console.log(nes.getArea())
console.log(nes.getPerimeter())