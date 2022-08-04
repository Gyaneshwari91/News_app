import React, { useRef } from "react";

function UncontrolledInputs() {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log('name:', nameRef.current.value);
      console.log('email:', emailRef.current.value);
      console.log('message:', messageRef.current.value);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            autoComplete="off"
            ref={nameRef}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="off"
            ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            autoComplete="off"
            ref={messageRef}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }

  export default UncontrolledInputs