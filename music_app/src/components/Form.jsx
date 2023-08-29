import React, { useState } from 'react';

export default function Form() {

    const [text, textChange] = useState('Please Enter Your Email to receive updates about MBV!')


    return(
        <form className='form'>
            <h4>{text}</h4>
            <input type="text" name="email" id="form-text" />
            <button type='submit' onClick={(e) => {e.preventDefault(); textChange('Thankyou for signing up!')}}>Submit!</button>
        </form>
    )
}