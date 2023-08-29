import React, { useState } from 'react';

export default function Form() {



    return(
        <form className='form'>
            <h4>Please Enter Your Email to receive updates about MBV!</h4>
            <input type="text" name="email" id="form-text" />
            <button type='submit' onClick={(e) => {e.preventDefault(); console.log('Thankyou!')}}>Submit!</button>
        </form>
    )
}