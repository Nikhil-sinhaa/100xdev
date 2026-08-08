// create a counter for 30 sec (count down from 30 to 0)
let cnt = 30;
//using normal function

function cntdown(){
    console.log(cnt);
    cnt--;
    if(cnt<0){
        clearInterval(timer)
        console.log("Time Up")
    }
}
let timer = setInterval(cntdown,1000)

//using arrow function
let t = setInterval(() => {
    console.log(cnt);
    cnt--;
    if(cnt<0){
        clearInterval(t);
        console.log("30 seconds completed")
        return;
    }

},100)


