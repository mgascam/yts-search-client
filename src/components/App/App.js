import React, { Component } from 'react';
import './App.css';
import TorrentList from "../../containers/TorrentList/TorrentList";

class App extends Component {
  render() {
    return (
      <div className="App">
          <TorrentList />
      </div>
    );
  }
}

export default App;
