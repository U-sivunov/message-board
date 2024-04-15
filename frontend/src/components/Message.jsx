import React from "react";

export default function Message({createdAt, message, _id}) {
  function deleteMessage() {
    fetch(
      "http://localhost:3000/messages", {
        method: 'Delete',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({id: _id})
      }
    )
  }

  return (
    <div>
      <div>
        <h3>{createdAt.toString()}:</h3>
        <div>
          {message}
        </div>
      </div>
      <button onClick={deleteMessage}>Delete Message</button>
    </div>
  )
}