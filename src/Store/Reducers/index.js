import { combineReducers } from 'redux';
import initialState from '../Data';

const chartReducer = (state = initialState, action) => {
  let newState={};
  switch (action.type) {
    case 'ON_CHART_LOADING':
      newState = {...state,isLoading:action.payload};
	  break;	  
    case 'ON_CHART_ERROR':
      newState = {...state,errors:action.payload};
	  break;	  
	case 'ON_CHART_DATA':
      newState = {...state,chartData:action.payload};
	  break;	  
    default:
      newState = state;
  }
  return newState;
};

const TradesReducer = (state = initialState, action) => {
  let newState={};
  switch (action.type) {
    case 'ON_TRADE_LOADING':
      newState = {...state,isLoading:action.payload};
	  break;	  
    case 'ON_TRADE_ERROR':
      newState = {...state,errors:action.payload};
	  break;	  
	case 'ON_TRADE_DATA':
      newState = {...state,tradesData:action.payload};
	  break;	  
    default:
      newState = state;
  }
  return newState;
};

const reducers = combineReducers({ chartState:chartReducer,tradesState:TradesReducer});

export default reducers;