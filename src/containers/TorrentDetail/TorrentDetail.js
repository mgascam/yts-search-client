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
                <img src={this.props.torrent.medium_cover_image} alt=""/>
                {this.renderTorrentLinks()}
            </div>
        )

    }
    renderTorrentLinks() {
        return this.props.torrent.torrents.map((torrent) => {
            return <a key={torrent.quality} href={torrent.url}>{torrent.quality}</a>
        });
    }

}

function mapStateToProps(state) {
    return {
        torrent: state.activeTorrent
    }
}

export default connect(mapStateToProps)(TorrentDetail);