import React, { useState } from 'react';
import TrackButton from './TrackButton';

export default function DropCard(props) {




    return (
    <div className='toggle-panel' id="toggle">
        <p className='card-description'>{props.description}</p>
        <ul>
            {props.tracklist.map((track, index) => (
                <div key={props.tracklist[index]} className='li-cont'>
                    <li key={props.tracklist[index]}>{props.tracklist[index]}</li>
                    <TrackButton />
                </div>
            ))}
        </ul>
    </div>
    )
}