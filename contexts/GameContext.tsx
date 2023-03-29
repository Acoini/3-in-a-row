import React, { createContext, useState } from 'react'
import { io } from 'socket.io-client'


export const GameContext = createContext<GameContext>({} as GameContext)

const socket = io("http://localhost:5000")


function startNewGame(nickname: string) {
    socket.emit("queue", nickname)
}


export default function GameProvider({ children }: any) {
    const [currentGame, setCurrentGame] = useState<Game>({
        nickname: ""
    })
    
    socket.on("game", (args) => {
        console.log(args)
    })

    const contextValues = {
        currentGame,
        setCurrentGame,
        startNewGame
    }

    return (
        <GameContext.Provider value={contextValues}>
            {children}
        </GameContext.Provider>
    )
}

interface GameContext {
    currentGame: Game
    startNewGame: Function
}

interface Game {
    nickname: string
}