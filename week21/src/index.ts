import { gameManager } from './store.js'
setInterval(()=>{
    gameManager.addGame({
        id: Math.random().toString(),
        whitePlayerName: 'Alice',
        blackPlayerName: 'rome',
        moves: []
    })
},5000)