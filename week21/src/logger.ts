import { games } from './store.js';

export function startlogger(){
    setInterval(()=>{
        console.log(games);
    }, 5000);
}