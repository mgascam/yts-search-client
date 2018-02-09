import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectTorrent } from '../../actions/index';
import { bindActionCreators } from 'redux';

class TorrentList extends Component {
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

    renderList() {
        return this.props.torrents.map((movie) => {
            console.log(movie);
            return (
                <li
                    key={movie.title}
                    className="list-group-item"
                    onClick={() => this.props.selectTorrent(movie)}
                >
                    {movie.title}
                </li>
            )
        });

    }
}

function mapStateToProps({torrents}) {
    return { torrents }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectTorrent: selectTorrent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TorrentList);
