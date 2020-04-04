interface IRectangle {
   name(): string;
   width(): number;
   height():number;
   area(): number;
}

class Rectangle implements IRectangle
{
  private _width: number;
  private _height:number;
  private _name:string;

  constructor(width: number,height:number, name:string ){
    this._height = height;
    this._width = width;
    this._name = name;
  }

  name(): string { return this._name;}
  height(): number { return this._height;}
  width(): number { return this._width;}
  area(): number { return this._width*this._height; }
}

class Square extends Rectangle
{
  constructor(side: number){
    super(side,side,"Square");
  }
}

class Main
{
    info(rect: IRectangle[] ) : void
    {
        rect.forEach(it => {
          console.log("I am: "+it.name()+" w/Area: "+it.area());
        });
    }
}


let main = new Main();
let rec01 = new Rectangle(10, 20,"Rectangle");
let rec02 = new Square(30);
let rec03 = new Square(50);
let rec04 = new Rectangle(60, 40,"Rectangle");
main.info([rec01, rec02, rec03, rec04]);

//TRAZAS
//I am: Rectangle w/Area: 200
//I am: Square w/Area: 900
//I am: Square w/Area: 2500
//I am: Rectangle w/Area: 2400