import React, { Component } from 'react';
import './App.css';
import TorrentList from "../../containers/TorrentList/TorrentList";
import TorrentDetail from "../../containers/TorrentDetail/TorrentDetail";
import SearchBar from "../../containers/SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
          <SearchBar />
          <TorrentList />
          <TorrentDetail />
      </div>
    );
  }
}

export default App;
