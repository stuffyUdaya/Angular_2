let myNum:number = 5;
let myString:string = "Hello Universe";
let myArr:number[]=[1,2,3,4];
const myObj = {
  name: "Bill"
}
var anythingVariable:string = "Hey";
var anytingVariable:number = 25;
let arrayOne:boolean[]=[true,false,true,true];
let arrayTwo:any= [1,'abc',true,2];
const myobject = {
  x: 5,
  y:10
};

// object constructor

class MyNode {
val:number =0;
_priv:number;
constructor(val:number){
  this.val =val;
}
doSomething(){
  this._priv= 10
}
}
let myNodeInstnace = new MyNode(1);
console.log(myNodeInstnace.val);
function myFunction():void{
  console.log("Hello World");
  return;
}
function sendingErrors(): never{
  throw new Error('Error message');
}
