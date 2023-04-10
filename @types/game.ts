export interface Game {
    nickname: string 
    symbol: string
    gameState: string[] 
    winner: string | null
}

export type GameMethods = {
    start: Function
    move: Function
}

export type GameContext = Game | GameMethods
