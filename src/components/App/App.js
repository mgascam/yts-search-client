import React, { Component } from 'react';
import './App.css';
import TorrentList from "../../containers/TorrentList/TorrentList";
import TorrentDetail from "../../containers/TorrentDetail/TorrentDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
          <TorrentList />
          <TorrentDetail />
      </div>
    );
  }
}

export default App;
