//calculate the time it takes between setTimeout call and the inner function actually running
let start = Date.now()

setTimeout(()=>{
    const end = Date.now();
    console.log(`Actual delay is ${end-start}`)
},1000)

