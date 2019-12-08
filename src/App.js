import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Profile } from "./Wrapper";
import Friends from "./Friends";
import List from "./List";
import "./App.css";
function myProfile() {
  return (
    <div>
      <Profile
        photo="/profile.jpg"
        Name={{ firstName: `Chamseddine`, lastName: `Bouhouch` }}
        link="https://www.facebook.com/chamseddine.bouhouch"
      />
    </div>
  );
}
function myFriends() {
  return (
    <div className="App">
      <Friends />
    </div>
  );
}
function ToDos() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <List />
    </div>
  );
}
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/Friends">Friends</Link>
          </li>
          <li>
            <Link to="/ToDos">ToDos</Link>
          </li>
        </ul>

        <Route path="/Profile" component={myProfile} />
        <Route path="/Friends" exact component={myFriends} />
        <Route path="/ToDos" component={ToDos} />
      </BrowserRouter>
    );
  }
}
export default App;
