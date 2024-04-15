import React from "react";
import {useQuery} from "react-query";
import Message from "./Message";

export default function MessageList() {





  const { isLoading, error, data, isSuccess } = useQuery(["messages"], () =>
    fetch(
      "http://localhost:3000/messages", {
        method: 'GET',
      }
    ).then((res) => res.json())
  );
  return (
    <div>
      {isLoading && <p>Loading..</p>}
      {error && <p>Error occurred!</p>}
      {isSuccess && data.map( m => {return <Message {...m} key={m._id}/>})}
    </div>
  );
}