import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:'',
      password:''
    };
  }
  handleUsernameOnChange=(e)=>{
    this.setState({
      username:e.target.value

    })
  }
  handlePasswordOnChange=(e)=>{
    this.setState({
      password:e.target.value

    })
  }
  handleSubmit=(e)=>{
    e.preventDefault()


  }


  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input
              id="username"
              onChange={this.handleUsernameOnChange}
              name="username"
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              onChange={this.handlePasswordOnChange}
              name="password"
              type="password"
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
