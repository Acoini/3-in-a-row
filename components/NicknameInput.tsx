import React, { useState } from 'react';
import Image from 'next/image';
import { io } from 'socket.io-client';

const socket = io("http://localhost:5000")

socket.on("game", (args: any) => {
    console.log("game: " + args)
})

export default function NicknameInput() {
    const [nickname, setNickname] = useState("");

    function handleOnChange(event:any) {
        if (/^[a-zA-Z ]*$/.test(event.target.value)) {
            setNickname(event.target.value)
        }
    }

    function handleNewPlay() {
        socket.emit("queue", nickname)
    }

    return (
        <>
            <div className="centered-div">
                <div className="header">
                    <h3>Your nickname is</h3>
                </div>
                <input onChange={handleOnChange} value={nickname} type="text" pattern="[A-Za-z]+" required maxLength={8} title="Only letters allowed" placeholder="Tickypick" className="entername" />
            </div>
            <Image onClick={handleNewPlay} src='play.svg' className='translate-y-1' alt='Play button' width="40" height="40" />
        </>
    )
}