import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
export default class Friends extends React.Component {
  state = {
    photo: "/sarra.jpg",
    title: "Sarra",
    description: "This is Sarra profiles"
  };
  render() {
    return (
      <div>
        <button
          // style={{ backgroundColor: this.state.buttonColor }}
          onClick={() => {
            this.setState({
              photo: "/sarra.jpg",
              title: "Sarra",
              description: "This is Sarra profiles"
            });
          }}
        >
          Sarra
        </button>
        <button
          // style={{ backgroundColor: this.state.buttonColor }}
          onClick={() => {
            this.setState({
              photo: "/aymen.jpg",
              title: "Aymen",
              description: "This is Aymen Profile"
            });
          }}
        >
          Aymen
        </button>
        <button
          // style={{ backgroundColor: this.state.buttonColor }}
          onClick={() => {
            this.setState({
              photo: "/rami.jpg",
              title: "Rami",
              description: "This is Rami profile"
            });
          }}
        >
          Rami
        </button>
        <h1>{this.state.title}</h1>
        <img src={this.state.photo} alt="" />
        <p>{this.state.description}</p>
      </div>
    );
  }
}
