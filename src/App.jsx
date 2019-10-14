import React from 'react';
import ChatDisplayContainer from "./components/chat-display/chat-display-container";
import SendMessageContainer from "./components/send-message/send-message-container";

function App() {
  return (
    <div className="app">
      <ChatDisplayContainer />
      <SendMessageContainer />
    </div>
  );
}

export default App;
