import React from "react";
import ChatDisplayMessagesList from "./chat-display-messages-list";
import { getAllMessages } from "../../api/api";

class ChatDisplayContainer extends React.Component {
  state = { previousMessages: [] }
  
  fetchMessages = () => {
    getAllMessages()
      .then(previousMessages => this.setState({ previousMessages }));
  }

  componentDidMount() {
    this.fetchMessages();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, this.props);
    console.log(prevState, this.state);
  }

  render() {
    const { previousMessages } = this.state;
    return (
      <div className="chat-display-container">
        <ChatDisplayMessagesList previousMessages={previousMessages} />
      </div>
    );
  }
}

export default ChatDisplayContainer;