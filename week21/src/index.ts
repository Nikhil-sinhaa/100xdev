import {games} from './store.js'
setInterval(()=>{
    games.push({
        id:Math.random.toString(),
        whitePlayerName:'Alice',
        blackPlayerName:'rome',
        moves:[]
    })
},5000)