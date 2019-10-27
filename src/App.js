import React from "react";
import { Profile } from "./Wrapper";
import "./App.css";

function App() {
  return (
    <div className="App-background">
      <Profile
        photo="/profile.jpg"
        Name={{ firstName: `Chamseddine`, lastName: `Bouhouch` }}
        link="https://www.facebook.com/chamseddine.bouhouch"
      />
    </div>
  );
}

export default App;
