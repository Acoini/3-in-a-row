import GameBoard from '@/components/GameBoard'
import Head from 'next/head'
import React from 'react'

export default function Playroom() {
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
