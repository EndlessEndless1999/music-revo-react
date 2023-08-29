import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default function DropCard(props) {
    const closeCard = () => {
        return
    }

    return (
    <div className='toggle-panel' id="toggle">
        <p className='card-description'>{props.description}</p>
        <ListGroup>

        </ListGroup>
        <button type='submit' onClick={closeCard}>Close</button>
    </div>
    )
}