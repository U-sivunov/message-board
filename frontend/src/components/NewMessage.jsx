import React from "react";
import {useMutation} from "react-query";

export default function NewMessage() {
  const mutation = useMutation(message => sendMessage(message))

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
    mutation.mutate(fields)
  }

  return (
    <form onSubmit={onSubmit}>
      <textarea className='new-message-text' name='message'/>
      <button>Send</button>
    </form>
  )
}