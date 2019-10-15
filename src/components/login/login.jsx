import React from "react";
import CustomButton from "../UI/custom-button";

class Login extends React.Component {
  state = { username: "" }

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  }

  render() {
    const { username } = this.state;
    const { children, handleSubmit, user } = this.props;
    return user === null ? (
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="title">Enter your name to start chatting!</h1>
        <input className="input" value={username} name="username" placeholder="Username" onChange={this.handleChange} />
        <CustomButton type="submit">Login</CustomButton>
      </form>
    ) : (
       children
    );
  }
}

export default Login;