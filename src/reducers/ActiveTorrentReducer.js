export default function (state = null, action) {
    switch (action.type) {
        case 'TORRENT_SELECTED':
            return action.payload;
        default:
            return state;
    }

}