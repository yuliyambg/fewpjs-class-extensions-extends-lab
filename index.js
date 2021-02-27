// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides
        this.count = this.sides.length
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((accum, currentVal) => accum + currentVal)
    }
}

class Triangle extends Polygon {
    get isValid(){
        return this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1]  && this.sides[1] + this.sides[2] > this.sides[0] && this.countSides === 3
    }

}

class Square extends Polygon {
get area(){
    return this.sides[0] **2
}

get isValid(){
    for (let i=0; i< this.sides.length; i++){
        if (this.sides[i] !== this.sides[0]){
            return false
        }
    }
    return true
}
}