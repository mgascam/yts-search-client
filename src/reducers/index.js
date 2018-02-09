import { combineReducers } from 'redux';
import TorrentsReducer from "./TorrentsReducer";

const rootReducer = combineReducers({
    torrents: TorrentsReducer
});

export default rootReducer;