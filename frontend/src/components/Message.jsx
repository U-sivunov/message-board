import React from "react";

const url = process.env.REACT_APP_API_URL + 'messages';
export default function Message({createdAt, message, _id}) {
  function deleteMessage() {
    fetch(
      url, {
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