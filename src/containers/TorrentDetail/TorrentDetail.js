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
                <ul>
                    {this.renderTorrentLinks()}
                </ul>
                <p>{this.props.torrent.summary}</p>
            </div>
        )

    }
    renderTorrentLinks() {
        return this.props.torrent.torrents.map((torrent) => {
            return <li key={torrent.quality}><a  href={torrent.url}>{torrent.quality}</a></li>
        });
    }

}

function mapStateToProps(state) {
    return {
        torrent: state.activeTorrent
    }
}

export default connect(mapStateToProps)(TorrentDetail);