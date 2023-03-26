import React from 'react'

export default function GameBoard() {
  return (
    <div className="grid grid-cols-3 gap-0 w-80 h-80 rounded-md overflow-hidden">
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className={`flex items-center justify-center bg-${i%2==0?'slate':'white'}-50`}
          onClick={() => console.log(i)}
        >
        </div>
      ))}
    </div>
  )
}
