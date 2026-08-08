function sq(a){
    return a*a
}
function cube(a){
    return a*a*a;
}
function getsumsq(a,b){
    return sq(a)+sq(b);
}
function getsumcu(a,b){
    return cube(a)+cube(b);
}
console.log(getsumsq(3,4));
console.log(getsumcu(3,4));

//callback
function calculate(a,b,fn){
    return fn(a)+fn(b);
}
console.log(calculate(3,4,cube));
console.log(calculate(3,4,sq));

//anonymous function

function sumofSomething(a,b,fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1+val2;
}
function sumofSomething(a, b, fn) {
    return fn(a) + fn(b);
}

console.log(
    sumofSomething(2, 3, function(a) {
        return a * a * a;
    })
);


