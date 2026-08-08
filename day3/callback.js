function calculate(a,b,fntocall){
    let answer = fntocall(a,b);
    return answer;
}
function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function mul(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}
function modulo(a,b){
    return a % b;
}

let ans = calculate(2,5,sub);
console.log(ans);