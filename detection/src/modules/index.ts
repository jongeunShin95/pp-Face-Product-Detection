import { combineReducers } from 'redux';
import detection from './detection';

const rootReducer = combineReducers({
    detection
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;