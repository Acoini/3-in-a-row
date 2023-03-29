import React, { createContext, useMemo, useState } from 'react'
import { io } from 'socket.io-client'



const socket = io("http://localhost:5000")

export const GameContext = createContext<object>({})


function startNewGame(nickname: string) {
    socket.emit("queue", nickname)
}


export default function GameProvider({ children }: any) {
    const [currentGame, setCurrentGame] = useState<Game>({
        nickname: ""
    })
    
    socket.on("game", () => {
            
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


interface Game {
    nickname: string
}