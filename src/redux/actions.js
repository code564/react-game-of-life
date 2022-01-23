import background from 'redux-background';
import getNextPopulation from '../utils/population';

export const actionTypes = {
    SET_CELLS: "SET_CELLS",
    PAUSE_SIMULATION: "PAUSE_SIMULATION",
    START_SIMULATION: "START_SIMULATION"
};

const { actions: { startJob, stopJob } } = background;
const jobOptions = { interval: 1000, maxTimes: Infinity };

const simulationJobWorker = (dispatch, getState) => {
    const state = getState();
    const isPaused = state.simulation.isPaused;
    if (isPaused) return;
    const cells = state.simulation.cells;
    const nextCells = getNextPopulation(cells);
    dispatch(setCells(nextCells));
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

export const setCells = (cells) => {
    return {
        type: actionTypes.SET_CELLS,
        payload: cells
    }
}
