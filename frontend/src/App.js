import './App.css';
import {QueryClient, QueryClientProvider} from "react-query";
import MessageList from "./components/MessageList";
import NewMessage from "./components/NewMessage";

const queryClient = new QueryClient();
const url = process.env.REACT_APP_SOCKET_URL;
const ws = new WebSocket(url);
ws.onmessage = wsHandler;
function wsHandler(m) {
  const data = JSON.parse(m.data);
  if (data.type === 'new-message') {
    queryClient.setQueryData('messages', (messages) => addMessage(messages, data.payload));
  } else if (data.type === 'delete-message') {
    queryClient.setQueryData('messages', (messages) => deleteMessage(messages, data.payload.id));
  } else {
    queryClient.invalidateQueries('messages');
  }
}

function addMessage(messages, mes) {
  messages.push(mes);
  return messages;

}

function deleteMessage(messages, id) {
  return messages.filter(m => m._id !== id);
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
