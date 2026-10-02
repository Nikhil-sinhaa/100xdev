import { gameManager } from "./store.js";

export function startlogger(){
    setInterval(()=>{
        gameManager.log();
    }, 5000);
}
