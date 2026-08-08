const user1=[{
    name:"Nikhil",
    gender:"Male"
},
{
    name:"Alphana",
    gender:"Female"
}
]

for(let i = 0 ; i<user1.length;i++){
    if(user1[i].gender=="Female"){
        console.log(user1[i].name)
    }
}