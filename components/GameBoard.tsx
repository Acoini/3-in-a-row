import React from 'react'

export default function GameBoard() {
  return (
    <div className="grid grid-cols-3 gap-0 w-80 h-80 rounded-md overflow-hidden shadow-md">
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className={`flex items-center justify-center ${i%2==0?'bg-slate-50':'white'}`}
          onClick={() => console.log(i)}
        >
        </div>
      ))}
    </div>
  )
}
