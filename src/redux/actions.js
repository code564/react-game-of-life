import background from 'redux-background';
import getNextPopulation from '../utils/population';
import initCells from '../utils/initializer';

export const actionTypes = {
    SET_CELLS: "SET_CELLS",
    PAUSE_SIMULATION: "PAUSE_SIMULATION",
    START_SIMULATION: "START_SIMULATION",
    RESET_SIMULATION: "RESET_SIMULATION"
};

const { actions: { startJob, stopJob } } = background;
const jobOptions = { interval: 1000, maxTimes: Infinity };

const simulationJobWorker = (dispatch, getState, stepMode = false) => {
    const state = getState();
    const { isPaused, isReset } = state.simulation;
    if ((isPaused && !stepMode) || isReset) return;
    const cells = state.simulation.cells;
    const nextCells = getNextPopulation(cells);
    return dispatch(setCells(nextCells));
}

export const stepSimulation = () => (dispatch, getState) => {
    dispatch(() => simulationJobWorker(dispatch, getState, true));
}

export const startSimulation = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.START_SIMULATION
    });
    dispatch(startJob('simulation', () => simulationJobWorker(dispatch, getState), jobOptions));
}

export const pauseSimulation = () => (dispatch) => {
    dispatch({
        type: actionTypes.PAUSE_SIMULATION
    });
    dispatch(stopJob('simulation'));
}

export const resetSimulation = () => (dispatch) => {
    dispatch({
        type: actionTypes.RESET_SIMULATION
    });
    dispatch(stopJob('simulation'));
    dispatch(setCells(initCells(30,30)));
}

export const setCells = (cells) => {
    return {
        type: actionTypes.SET_CELLS,
        payload: cells
    }
}
