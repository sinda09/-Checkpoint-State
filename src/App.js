import "./App.css";
import myImage from "./Component/sinda.jpeg";
import PersonnelProfil from "./Component/PersonnelProfil";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      fullName: "sinda Brahem",
      bio: "Physicist",
      imgSrc: (
        <img
          style={{ width: "200px", height: "150px" }}
          src={myImage}
          alt="img"
        ></img>
      ),
      profession: "Physics Teacher",
    };
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div id="container">
        <button
          onClick={this.handleShow}
          style={{
            height: "50px",
            borderRadius: "15px",
            fontSize: "25px",
            backgroundColor: "pink",
            border: "2px solid pink ",
          }}
        >
          Click To Change
        </button>
        {this.state.show ? (
          <PersonnelProfil
            name={this.state.fullName}
            bio={this.state.bio}
            img={this.state.imgSrc}
            profession={this.state.profession}
          />
        ) : (
          <h1> Profile not found </h1>
        )}
      </div>
    );
  }
}
