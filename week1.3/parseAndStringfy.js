const users = '{"name":"harkirat","age":21,"gender":"male" }'
 
const user =JSON.parse(users)
console.log(user["gender"])


//stringify

const finalstring = JSON.stringify(user)
console.log(finalstring["name"])