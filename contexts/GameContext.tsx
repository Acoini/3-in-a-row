import React, { createContext, useState } from 'react'
import { Game } from '@/@types/game'
import { io } from 'socket.io-client'


export const GameContext = createContext<any>({})

const socket = io("http://localhost:5000")


export default function GameProvider({ children }: any) {
    const [currentGame, setCurrentGame] = useState<Game>()
    
    socket.on("game", (args) => {
        console.log(args)
    })

    return (
        <GameContext.Provider value={{}}>
            {children}
        </GameContext.Provider>
    )
}

