import React, {useRef, useState }  from 'react'
import { useFormStatus } from 'react-dom'

const submitUserData = () =>{
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000);
    }).then (function (){
        return {
            status: 'success',  
            data: 'User'
        };
    });
};

function SubmitButton (){
    const  {pending , data } =useFormStatus ();

    return(
         <>
         <button type = "submit" disabled={pending}>
            {pending?  'submitting....': 'submit'}
         </button>
         <p>{data ? `Requesting ${data?.get('name')}...` : ''}</p>
         </>
    )
}

export default function Form() {
  return (
    <form action={submitUserData} noValidate>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <SubmitButton />
    </form>
  );
}