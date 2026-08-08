const x :number = 331;
console.log(x); 

function greet(firstName:String){
    console.log("Hello"+firstName)
}

greet("Nikhil")


function sum(a:number,b:number):number{
    return a+b;
}
const val = sum(1,2);
console.log(val)    



function runafter1s(fn:()=>void){
    setTimeout(fn,1000);
}
runafter1s(function(){
    console.log("hi there") 
})

interface User{
    firstName:string;
    lastName:string;
    age:number
    email?:string
};
function isLegal(user:User){
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}
 
function greet1(user:User){
    console.log("hi there" + user.firstName);
}
isLegal({
    firstName:"Nk",
    lastName:"sin",
    age:23 
})

interface Person{
    name:string;
    age:number;
    greet(phrase:string):void
}

class Employee implements Person{
    name:string;
    age:number;

    constructor(n:string, a:number){
        this.name = n;
        this.age = a;
    }
    greet (phrase:string){
        console.log(`${phrase} ${this.name}`)
    }
}
type Greetarg = number | string;
function f1(id:Greetarg){

}
function f2(id: number| string){

}

interface Employee {
    name:string;
    startDate:string;
}
interface Manager{
    neame:string;
    department:string;
}
type techlead = Employee& Manager;
type Emp = Employee[]
type numberarr = number[]
function maxvalue(arr:number[]){

}