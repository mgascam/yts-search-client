import React, { Component } from 'react';
import { connect } from 'react-redux';

class TorrentDetail extends Component {
    render() {
        if (!this.props.torrent) {
            return <div>Select a torrent to get details</div>
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div>{this.props.torrent.title}</div>
            </div>
        )

    }
}

function mapStateToProps(state) {
    return {
        torrent: state.activeTorrent
    }
}

export default connect(mapStateToProps)(TorrentDetail);