import initialState from '../Data';
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

export default TradesReducer;