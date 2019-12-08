import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
function Wrapper(props) {
  return <>{props.children}</>;
}

export function Photo(props) {
  return <img src={props.src} alt="The toff" />;
}
export function Title(props) {
  return <h1 style={props.style}>{props.children}</h1>;
}
export function Profile(props) {
  return (
    <div className="container">
      <img src={props.photo} alt="The toff" width="500px" />
      <Title style={{ color: "red", fontSize: "40px" }}>
        {props.Name["firstName"]} {props.Name["lastName"]}
      </Title>
      <div>
        {props.link != "" && (
          <button
            onClick={() => {
              window.location = props.link;
            }}
          >
            My facebook
          </button>
        )}
      </div>
    </div>
  );
}
export default Wrapper;
