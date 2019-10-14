import React from "react";
import TextareaInput from "../UI/textarea-input";
import CustomButton from "../UI/custom-button";
import { postMessage } from "../../api/api";

class SendMessageContainer extends React.Component {
  state = { input: "" }

  sendMessage = (message) => {
    postMessage(message);
    this.props.updateMessages();
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { input } = this.state;
    const { user } = this.props;
    const message = { message: input, author: user };
    this.sendMessage(message);
    this.setState({ input: "" });
  }

  render() {
    const message = "Write your message here";
    const { input } = this.state;
    return (
      <form className="send-message-container" onSubmit={this.handleSubmit}>
        <TextareaInput
          onChange={this.handleChange}
          placeholder={message}
          value={input}
          title={message}
          autoFocus />
        <CustomButton
          type="submit">
          Send
        </CustomButton>
      </form>
    );
  }
}

export default SendMessageContainer;