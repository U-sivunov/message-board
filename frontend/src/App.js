import './App.css';
import React, {useEffect, useState} from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import MessageList from "./components/MessageList";
import NewMessage from "./components/NewMessage";

const queryClient = new QueryClient();
const ws = new WebSocket('ws://localhost:3030');
ws.onmessage = wsHandler;
function wsHandler(m) {
    queryClient.invalidateQueries('messages');
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          Welcome!
        </header>
        <MessageList/>
        <NewMessage/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
