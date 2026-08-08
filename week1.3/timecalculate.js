function cal(){
    let a = 0 ;
    for(let i = 0 ; i<1000000000; i++){
        a+=i;
    }
    return a;

}

const beforedate = new Date();
const beforeTimeInMs = beforedate.getTime();
cal();
const afterdate = new Date();
const afterTimeInMs = beforedate.getTime();

console.log(afterTimeInMs-beforeTimeInMs)
