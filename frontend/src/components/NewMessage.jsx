import React from "react";

export default function NewMessage() {
  function sendMessage(data) {
    return fetch(
      "http://localhost:3000/messages", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data)
      }
    )
  }

  function onSubmit(event) {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.target));
    sendMessage(fields).then( () => {
        event.target.reset();
    });

  }

  return (
    <form className="new-message" onSubmit={onSubmit}>
      <textarea className='new-message-text' name='message'/>
      <button>Send</button>
    </form>
  )
}