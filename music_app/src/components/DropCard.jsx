import React, { useState } from 'react';

export default function DropCard(props) {
    const closeCard = () => {
        return
    }



    return (
    <div className='toggle-panel' id="toggle">
        <p className='card-description'>{props.description}</p>
        <ul>
            {props.tracklist.map((track, index) => (
                <li key={props.tracklist[index]}>{props.tracklist[index]}</li>
            ))}
        </ul>
        <button type='submit' onClick={closeCard}>Close</button>
    </div>
    )
}