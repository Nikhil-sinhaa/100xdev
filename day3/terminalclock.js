// function showClock(){
//     const now = new Date();
//     const time = now.toLocaleTimeString()
//     console.clear();
//     console.log(time);

// }
// setInterval(showClock,1000);


//by extracting hour minute seconds

function showclock(){
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = String(h).padStart(2,"0");
    m = String(m).padStart(2,"0");
    s = String(s).padStart(2,"0");

    console.clear();
    console.log(`${h}:${m}:${s}`);
}
setInterval(showclock,1000);