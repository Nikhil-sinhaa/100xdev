import console = require("console");

 enum direction{
    up,
    down,
    left,
    right
 }
  function doSomething(keypressed:direction){
        if(keypressed==direction.up){
            console.log("up")
        }
 }

 doSomething(direction.up)