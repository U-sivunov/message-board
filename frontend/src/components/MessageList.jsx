import React from "react";
import {useQuery} from "react-query";
import Message from "./Message";

const url = process.env.REACT_APP_API_URL + 'messages';
export default function MessageList() {
  const { isLoading, error, data, isSuccess } = useQuery(["messages"], () =>
    fetch(
      url, {
        method: 'GET',
      }
    ).then((res) => res.json()),
  { refetchOnWindowFocus: false }
  );
  return (
    <div>
      {isLoading && <p>Loading..</p>}
      {error && <p>Error occurred!</p>}
      {isSuccess && data.map( m => {return <Message {...m} key={m._id}/>})}
    </div>
  );
}