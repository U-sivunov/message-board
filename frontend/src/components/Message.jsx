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
    <div className="message">
      <div>
        <b>{createdAt.toString()}:</b>
        <div>
          {message}
        </div>
      </div>
      <button onClick={deleteMessage}>Delete Message</button>
    </div>
  )
}