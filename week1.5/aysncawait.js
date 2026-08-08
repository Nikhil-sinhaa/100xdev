function machine(){
    console.log("Place your Order")
    let a = new Promise(function(resolve){
        console.log("Your Order is placed wait till food is being cooking")
        setTimeout(function(){
            console.log("your food is cooked");
            resolve("Food is packed")
        },4*1000);
    } );
    return a;
}
async function ondone(){
    let a = await machine();
    console.log("Arriving in 5 min");
}

ondone()
