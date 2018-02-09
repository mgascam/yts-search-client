import React, { Component } from 'react';
import { connect } from 'react-redux'

class TorrentList extends Component {
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

    renderList() {
        return this.props.torrents.map((torrent) => {
            return <li key={torrent.title} className="list-group-item">{torrent.title}</li>
        });
    }
}

function mapStateToProps(state) {
    return {
        torrents: state.torrents
    }
}

export default connect(mapStateToProps)(TorrentList);
