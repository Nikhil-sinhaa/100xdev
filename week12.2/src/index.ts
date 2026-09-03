interface User {
    id: string;
    readonly name: string;
    readonly Age: number;
    email: string;
    password: string;
}

interface UserDetails {
    id: string;
    name: string;
    Age: number;
    email: string;
    password: string;
}

const user: Readonly<UserDetails> = {
    id: "a",
    name: "Nikhil",
    Age: 22,
    email: "dfaf",
    password: "dfa"
};

type UpdateProps = Pick<User, "name" | "Age">;
type UpdatePropsOptional = Partial<UpdateProps>;

function updateuser(updatedProps: UpdateProps) {

}

function sumOfAge(user1: UpdateProps, user2: UpdateProps) {
    return user1.Age + user2.Age;
}

const age = sumOfAge(
    { name: "Nikhil", Age: 22 },
    { name: "Alphana", Age: 23 }
);

console.log(age);

type UserInfo = {
    id: string;
    username: string;
};

type UserMap = Record<string, UserInfo>;

const userDirectory: UserMap = {
    Nikhil: {
        id: "a",
        username: "Niks"
    },
    Alphana: {
        id: "b",
        username: "Alpha"
    }
};

userDirectory["Nikhil"].username = "Sinha";

 const usermap = new Map()
 usermap.set("Nikhil",{name:"Nik",age:23})
 usermap.set("Nil",{name:"nili",age:33})

 const userget = usermap.get("Nikhil")