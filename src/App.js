import "./App.css";
import myImage from "./Component/sinda.jpeg";
import PersonnelProfil from "./Component/PersonnelProfil";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      time: 0,
      person: {
        fullName: "sinda",
        bio: "",
        imgSrc: myImage,
        profession: "Physicist",
      },
    };
  }
  Handleshow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };
  componentDidMount() {
    console.log("cdm");
    setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 5000);
  }

  render() {
    return (
      <div id="container">
        {console.log("render")}
        {console.log(this.state.person.fullName)}
        {console.log(this.state.person.bio)}
        {console.log(this.state.person.profession)}
        <img src={myImage} alt="#" width="100px" /> <br />
        {console.log(this.state.show)}
        <button
          onClick={this.Handleshow}
          style={{
            height: "50px",
            borderRadius: "15px",
            fontSize: "25px",
            backgroundColor: "pink",
            border: "2px solid pink ",
          }}
        >
          Click To Change
        </button>{" "}
        <br />
        {console.log(this.state.show)}
        {this.state.show ? <PersonnelProfil /> : null} <br />
        <button
          style={{
            height: "50px",
            borderRadius: "15px",
            fontSize: "25px",
            backgroundColor: "yellow",
            border: "2px solid pink ",
          }}
        >
          time : {this.state.time} sec
        </button>
      </div>
    );
  }
}
