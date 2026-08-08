class Animal{
    constructor(name, legs, speaks) {
        this.name = name;
        this.legs = legs;
        this.speaks = speaks;
    }
    speak(){
        console.log("hi there " + this.speaks)
    }
    //this are attached to class itself like Animal used to define Class
    static myType(){
        console.log("Animal")
    }
}

const dog = new Animal("dogie", 2, "bhow bhow");

console.log(dog.name);


const cat = new Animal("cat",4,"meow")
console.log(cat.name)
cat.speak();

console.log(Animal.myType())