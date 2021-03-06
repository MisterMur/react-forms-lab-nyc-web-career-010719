import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet:'',
      remainingChars:this.props.maxChars
    };
  }
  handleOnChange=(e)=>{
    // debugger
    console.log('handleOnChange Event: ',e)
    this.setState({
      tweet:e.target.value,
      remainingChars:(this.props.maxChars-e.target.value.length)
    })

  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.tweet}
          onChange={this.handleOnChange}
        />
        <p>Remaining Characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
