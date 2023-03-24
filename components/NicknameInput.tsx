import React from 'react'

export default function NicknameInput() {
    // TODO: complete nickname input component logic and UI style
  return (
        <>
            <div>
                <label>Your nickname is:</label>
                <input 
                    type='text'
                    id='nickname-input'
                    name='nickname'
                    placeholder='type your nickname'
                    aria-label='Nickname input'
                />
            </div>
        </>
    )
}

