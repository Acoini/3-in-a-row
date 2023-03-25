import React from 'react'

export default function NicknameInput() {
    // TODO: complete nickname input component logic and UI style
  return (
   
<>
<div className="centered-div">
    <div className="header">
        <h3>Your nickname is</h3>
    </div>
    <input type="text" pattern="[A-Za-z]+" required maxLength={8} title="Only letters allowed" placeholder="Tickypick" className="entername"/>
</div>
</>
    )
}

