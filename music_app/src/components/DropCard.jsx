import React, { useState } from 'react';

export default function DropCard() {
    const closeCard = () => {
        return
    }

    return (
    <div className='toggle-panel' id="toggle">
        <p className='card-description'>This is an album. Below are the tracks:</p>
        <ul className='track-list'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        <button type='submit' onClick={closeCard}>Close</button>
    </div>
    )
}