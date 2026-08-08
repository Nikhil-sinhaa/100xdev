interface User{
    firstName: string;
    lastName: string;
    age:number;
}

function filtered(users:User[]){
    return users.filter(x=>x.age>=18);
}

console.log( filtered([
    {
        firstName:"harkirat",
        lastName:"singh",
        age:21
    },
    {
        firstName:"harki",
        lastName:"sinha",
        age:22
    },
    {
        firstName:"haki",
        lastName:"sibh",
        age:2
    }
]))