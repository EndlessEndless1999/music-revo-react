import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';


export default function Card(props) {

    const [open, setOpen] = useState(false);

    function toggle() {
        setOpen(!open)
        const html = document.getElementById('html');
        html.className = '';
        html.classList.add(props.html);
    }


    return (
        <>
            <div className="card-content-container">
                <div className={props.image} onClick={() => toggle()}>
                </div>
                <h3>{props.title}</h3>
                {open && props.children}
            </div>
        </>
    )
}