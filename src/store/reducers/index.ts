import { combineReducers } from 'redux';
import shoe from './shoeReducer';

const combinedReducer = combineReducers({
  shoe,
});

const reducer = (state: any, action: any) => combinedReducer(state, action);

export default reducer;
