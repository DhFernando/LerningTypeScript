let array : Array<string> = ["1","3"];
console.log(array);
enum fruit {
    apple,
    mango, orange
}
console.log(fruit[1])
let fun = function(x,y){
    return x*y
} 
console.log(fun(3,6));

let fun2 = (x,y)=>{return x*y}
console.log(fun2(3,4))

class MyClass{
     j:Number ;
     constructor(k:Number){this.j = k}
     value(){return this.j}
}

console.log( new MyClass(7).value())

class SuperClass{
   protected j:Number;
    constructor(x:Number){
        this.j = x
    }
    valueSuperClass(){
        return this.j;
    };
}

class SubClass extends SuperClass{
    protected i : Number;
    constructor(x:Number,y:Number){
        super(x);
        this.i = y;
    }

    valueSubClass(){
        return "i = "+this.i +"  j = "+ this.j
    }

}

console.log(new SubClass(1,3).valueSubClass());