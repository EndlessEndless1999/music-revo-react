import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';


export default function Card(props) {

    const [open, setOpen] = useState(false);


    return (
        <>
            <div className="card-content-container">
                <div className={props.image} onClick={() => setOpen(!open)}>
                </div>
                <h3>{props.title}</h3>
                {open && props.children}
            </div>
        </>
    )
}