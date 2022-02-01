import { combineReducers } from 'redux'
import { actionTypes } from './actions';
import initCells from '../simulation/initializer';

const simulationState = {
    cells: initCells(30, 30),
    lastStartingCells: [],
    isPaused: false,
    isReset: true,
    generationCount: 0,
    speed: -1000
};

const simulationReducer = (state = simulationState, action) => {
    switch (action.type) {
        case actionTypes.SET_CELLS:
            return { ...state, cells: action.payload }
        case actionTypes.SET_GENERATION_COUNT:
            return { ...state, generationCount: state.generationCount + 1 }
        case actionTypes.SAVE_STARTING_CELLS:
            return { ...state, lastStartingCells: action.payload }
        case actionTypes.START_SIMULATION:
            return { ...state, isPaused: false, isReset: false }
        case actionTypes.PAUSE_SIMULATION:
            return { ...state, isPaused: true, isReset: false }
        case actionTypes.RESET_SIMULATION:
            return { ...state, isPaused: false, isReset: true, cells: state.lastStartingCells, generationCount: 0 }
        case actionTypes.SET_SIMULATION_SPEED:
            return { ...state, speed: action.payload }
        default: return state
    }
};

const rootReducer = combineReducers({
    simulation: simulationReducer
});

export default rootReducer;