import { combineReducers } from 'redux'
import { actionTypes } from './actions';
import initCells from '../utils/initializer';

const simulationState = {
    cells: initCells(30, 30),
    isPaused: false
};

const simulationReducer = (state = simulationState, action) => {
    switch (action.type) {
        case actionTypes.SET_CELLS:
            return { ...state, cells: action.payload }
        case actionTypes.START_SIMULATION:
            return { ...state, isPaused: false}
        case actionTypes.PAUSE_SIMULATION:
            return { ...state, isPaused: true}
        default: return state
    }
}

const rootReducer = combineReducers({
    simulation: simulationReducer
});

export default rootReducer;