function showClock(){
    const now = new Date();
    const time = now.toLocaleTimeString()
    console.clear();
    console.log(time);

}
setInterval(showClock,1000);