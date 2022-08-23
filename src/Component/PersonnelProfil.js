import React, { Component } from "react";

export default class PersonnelProfil extends Component {
  state = {
    time: 0,
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      });
    }, 1000);
  };

  render() {
    const { name, img, bio, profession } = this.props;

    return (
      <div>
        <div> {img} </div>
        <h1> {name} </h1>
        <h2>{profession}</h2>
        <h2> {bio}</h2>
        <h1
          style={{
            height: "50px",
            width: "30px",
            borderRadius: "15px",
            fontSize: "25px",
            backgroundColor: "#ff1493",
            border: "2px solid pink ",
          }}
        >
          {this.state.time}
        </h1>
      </div>
    );
  }
}
