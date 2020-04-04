class Rectangle {
  private _width: number;
  private _height:number;

  constructor(width: number,height:number ){
    this._height = height;
    this._width = width;
  }
    area(): number {return this._width * this._height;}
}

class Calculator {

    Area(rect: Rectangle[] ) : number {
        let area : number = 0;
        rect.forEach(it => {
            area += it.area();
        });
        return area;
  } }


  class Square {
    private _side: number;
     constructor(side: number){
       this._side = side;
     }
     area(): number {return this._side * this._side;}
   }
   
   let calculator = new Calculator();
   let rec01 = new Rectangle(10, 20);
   let rec02 = new Square(30);
   //ERROR
   let res = calculator.Area([rec01,rec02]);
   console.log("Result: "+res);
   