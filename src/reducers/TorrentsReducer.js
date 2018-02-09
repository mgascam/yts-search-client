import { FETCH_TORRENT } from '../actions';
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_TORRENT:
            return action.payload.data.data.movies || [];
        default:
            return state;
    }

}