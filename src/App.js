import React, { Component } from 'react';
import Week from "./components/week/Week"
import Reminders from "./components/reminders/reminder";
import Logout from "./components/logoutOption/logout"
import './App.css';
import Modal from "./modal/index"


class App extends Component {

  render() {
    return (
    <div className="wrapper">
      <div className="logoutbutton">
        <Logout />
      </div>
      <div className="App-title">
        < Reminders />
      </div>
      <div className="App">
        < Week />
      </div>
      <input type="button" onClick={this.showModal}
      value="showModal" />
        <Modal /> 
    </div>
    );
  }
}

export default App;
