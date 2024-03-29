import { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head'
import Link from 'next/link';

import { GameContext } from '@/contexts/GameContext';
import { useRouter } from 'next/router';

export default function Home() {
  const [nickname, setNickname] = useState("");
  const router = useRouter()

  const handleOnChange = (event:any) => {
      if (/^[a-zA-Z ]*$/.test(event.target.value)) {
          setNickname(event.target.value)
      }
  }

  return (
    <>
      <Head>
        <title>3 In A Row</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex justify-center items-center h-screen'>
        <div className="centered-div">
            <div className="header">
                <h3>Your nickname is</h3>
            </div>
            <input 
              onChange={handleOnChange} 
              value={nickname} 
              type="text" 
              pattern="[A-Za-z]+" 
              required maxLength={8} 
              title="Only letters allowed" 
              placeholder="Tickypick" 
              className="entername" 
            />
        </div>
        <Link href={'/playroom'}>
          <Image 
            src='play.svg' 
            className='w-auto h-auto' 
            priority 
            alt='Play button' 
            width="21" 
            height="21" 
          />
        </Link>
      </main>
    </>
  )
}
