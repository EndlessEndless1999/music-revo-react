// import React, { useState } from 'react';


export default function Card() {


    const openCard = () => {
        return
    }

    const closeCard = () => {
        return
    }

    return (
        <>
            <div className="card-container">
                <div className='card-img'>
                    <h3>Isnt Anything</h3>
                    <button onClick={openCard}></button>
                </div>
                <div className='toggle-panel hidden'>
                    <p className='card-description'></p>
                    <ul className='track-list'></ul>
                    <button type='submit' onClick={closeCard}>Close</button>
                </div>
            </div>
        </>
    )
}