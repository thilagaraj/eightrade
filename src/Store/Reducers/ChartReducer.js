import initialState from '../Data';
const ChartReducer = (state = initialState, action) => {
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

export default ChartReducer;
