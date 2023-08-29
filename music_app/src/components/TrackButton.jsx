import React, { useState } from "react"



export default function TrackButton () {
    const [text, textChange] = useState('Like')

    return(
        <button className='like-button' onClick={() => {textChange('<3')}}>{text}</button>
    )
}