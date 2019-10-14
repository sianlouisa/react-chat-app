import React from 'react';
import SendMessageContainer from "./components/send-message/send-message-container";
import ChatDisplayMessagesList from "./components/chat-display/chat-display-messages-list";
import { getAllMessages } from "./api/api"

class App extends React.Component {
  state = { previousMessages: [] }
  
  fetchMessages = () => {
    getAllMessages()
      .then(previousMessages => this.setState({ previousMessages }));
  }

  componentDidMount() {
    this.fetchMessages();
  }

  updateMessages = () => {
    this.fetchMessages();
  }
  
  render() {
    const { previousMessages } = this.state;
    return (
      <div className="app">
      <ChatDisplayMessagesList previousMessages={previousMessages} /> 
      <SendMessageContainer updateMessages={this.updateMessages} />
      </div>
    );
  }
}

export default App;
