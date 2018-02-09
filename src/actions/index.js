export const FETCH_TORRENT = 'FETCH_TORRENT';
export const TORRENT_SELECTED = 'TORRENT_SELECTED';
export const ROOT_URL = 'https://yts.am/api/v2/list_movies.json?';

export function selectTorrent(torrent) {
    return {
        type: TORRENT_SELECTED,
        payload: torrent
    }
}

export function fetchTorrent(query) {
    const url = `${ROOT_URL}query_term=${query}`;
    let request = fetch(url);

    return {
        type: FETCH_TORRENT,
        payload: request
    }
    
}