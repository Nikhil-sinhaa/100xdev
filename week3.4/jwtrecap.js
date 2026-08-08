const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

const mailschema = zod.string().email();
const passwordschema = zod.string().min(6);

function signJwt(username, password) {
    // Your code here
    const usernameResponse = mailschema.safeParse(username);
    const passwordResponse = passwordschema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({
        username
    },jwtPassword)

    return signature;
}
const a = signJwt("Nikhil@gmail.com","2aa3jd")
console.log(a)