const zod = require('zod');
const schema = zod.string().email();

const response = schema.parse("asdfghj");
console.log(response.errors)