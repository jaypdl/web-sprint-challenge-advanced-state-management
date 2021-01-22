import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL, ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL } from '../actions';
export const initialState = {
  smurfs:[],
  isLoading: false,
  loadError:'',
  addError:''
}

const reducer = (state = initialState, action)=>{
  switch (action.type) {
    case FETCH_SMURF_START:
      return({
        ...state,
        isLoading: true,
        loadError:''
      });
    case FETCH_SMURF_SUCCESS:
      return({
        ...state,
        isLoading: false,
        smurfs: action.payload
      });
    case FETCH_SMURF_FAIL:
      return({
        ...state,
        isLoading: false,
        loadError: action.payload
      });
    case ADD_SMURF_START:
      return({
        ...state,
        isLoading: true,
        addError: ''
      });
    case ADD_SMURF_SUCCESS:
      return({
        ...state,
        isLoading: false,
        smurfs: action.payload
      });
    case ADD_SMURF_FAIL:
      return({
        ...state,
        isLoading: false,
        addError: action.payload
      });
    default:
      return state
  }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary