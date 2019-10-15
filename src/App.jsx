import React from 'react';
import SendMessageContainer from "./components/send-message/send-message-container";
import ChatDisplayMessagesList from "./components/chat-display/chat-display-messages-list";
import Login from "./components/login/login";
import { getAllMessages } from "./api/api"

class App extends React.Component {
  state = { previousMessages: [], user: null }
  
  fetchMessages = () => {
    getAllMessages()
      .then(previousMessages => this.setState({ previousMessages }));
  }

  componentDidMount() {
    this.fetchMessages();
    this.loadUser();
  }

  updateMessages = () => {
    this.fetchMessages();
  }

  saveUser = (user) => {
    sessionStorage.setItem("user", user);
  }

  loadUser = () => {
    const user = sessionStorage.getItem("user");
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = e.target.username.value;
    this.setState({ user });
    this.saveUser(user)
  }
  
  render() {
    const { previousMessages, user } = this.state;
    return (
      <div className="app">
        <Login handleSubmit={this.handleSubmit} user={user}>
          <ChatDisplayMessagesList previousMessages={previousMessages} user={user} /> 
          <SendMessageContainer updateMessages={this.updateMessages} user={user} />
        </Login>
      </div>
    );
  }
}

export default App;
