const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const jwtsecret = "ddaaff"

const value = {
    name: "harkirat",
    accountnumber:123123123
}

const token = jwt.sign(value,jwtsecret)
console.log(token)