import React from "react";
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
    <>
      <img src={props.photo} alt="The toff" width="800px" />
      <Title style={{ color: "red", fontSize: "50px" }}>
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
    </>
  );
}
export default Wrapper;
