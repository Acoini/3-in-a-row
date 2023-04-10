import GameBoard from '@/components/GameBoard'
import { GameContext } from '@/contexts/GameContext'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'

export default function Playroom() { 
  const { currentGame } = useContext(GameContext)
  const router = useRouter()

  useEffect(() => {
    if(!currentGame.nickname){
      router.push("/")   
    }
  }, [router])

  return (
    <>
      <Head>
        <title>Playroom</title>
        <meta name="description" content="Playing high games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex justify-center items-center h-screen'>
        <GameBoard />
      </main>
    </>
  )
}
