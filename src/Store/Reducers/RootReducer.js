import { combineReducers } from 'redux';
import ChartReducer from './ChartReducer';
import TradesReducer from './TradesReducer';

const reducers = combineReducers({ chartState:ChartReducer,tradesState:TradesReducer});
export default reducers;
