import React, { createContext, useState } from 'react'
import { io } from 'socket.io-client'


export const GameContext = createContext<GameContext>({} as GameContext)

const socket = io("http://localhost:5000")


export default function GameProvider({ children }: any) {
    const [currentGame, setCurrentGame] = useState<Game>({} as Game)
    
    socket.on("game", (args) => {
        console.log(args)
    })

    function start(nickname: string) {
        console.log(currentGame)
        setCurrentGame({} as Game)
        socket.emit("queue", nickname)
    }

    function move(position: number) {
        let newGameState = currentGame.gameState 
        newGameState[position] = currentGame.symbol
        setCurrentGame({
            ...currentGame,
            gameState: newGameState 
        })
    }

    const contextValues = {
        currentGame,
        setCurrentGame,
        start,
        move
    }

    return (
        <GameContext.Provider value={contextValues}>
            {children}
        </GameContext.Provider>
    )
}

interface GameContext {
    currentGame: Game
    start: Function
}

interface Game {
    nickname: string 
    symbol: string
    gameState: string[] 
    winner: string | null
}
