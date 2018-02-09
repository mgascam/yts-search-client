import { combineReducers } from 'redux';
import TorrentsReducer from "./TorrentsReducer";
import ActiveTorrentReducer from "./ActiveTorrentReducer";

const rootReducer = combineReducers({
    torrents: TorrentsReducer,
    activeTorrent: ActiveTorrentReducer
});

export default rootReducer;