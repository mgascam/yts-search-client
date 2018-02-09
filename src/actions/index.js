export function selectTorrent(torrent) {
    return {
        type: 'TORRENT_SELECTED',
        payload: torrent
    }
}