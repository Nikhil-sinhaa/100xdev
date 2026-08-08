function sum(n){
    let ans = 0 ;
    for(let i = 0 ; i<n; i++){
        ans+=i;
    }
    return ans;
}

function sumtill100(){
    console.log(sum(100))
}
setTimeout(sumtill100,3*1000)

function syncSleep(){
    let a = 2;
    for(let i = 0 ;i<100000000; i++){
        a++;
    }
}
syncSleep();
console.log("hello") 