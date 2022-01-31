import background from 'redux-background';
import getNextPopulation from '../simulation/population';
import initCells from '../simulation/initializer';

export const actionTypes = {
    SET_CELLS: "SET_CELLS",
    SAVE_STARTING_CELLS: "SAVE_STARTING_CELLS",
    PAUSE_SIMULATION: "PAUSE_SIMULATION",
    START_SIMULATION: "START_SIMULATION",
    RESET_SIMULATION: "RESET_SIMULATION",
    SET_GENERATION_COUNT: "SET_GENERATION_COUNT",
    SET_SIMULATION_SPEED: "SET_SIMULATION_SPEED"
};

const { actions: { startJob, stopJob } } = background;
const jobOptions = { maxTimes: Infinity };

const simulationJobWorker = (dispatch, getState, stepMode = false) => {
    const state = getState();
    const { isPaused, isReset, generationCount } = state.simulation;
    if ((isPaused && !stepMode) || isReset) return;
    const cells = state.simulation.cells;
    const nextCells = getNextPopulation(cells);
    dispatch(setCells(nextCells));
    dispatch({ type: actionTypes.SET_GENERATION_COUNT });
}

export const stepSimulation = () => (dispatch, getState) => {
    dispatch(() => simulationJobWorker(dispatch, getState, true));
}

export const startSimulation = () => (dispatch, getState) => {
    const state = getState();
    const { isReset, cells, speed } = state.simulation;
    if (isReset) dispatch({
        type: actionTypes.SAVE_STARTING_CELLS,
        payload: cells
    });
    dispatch({ type: actionTypes.START_SIMULATION });
    dispatch(startJob('simulation', () => simulationJobWorker(dispatch, getState), { ...jobOptions, interval: Math.abs(speed) }));
}

export const pauseSimulation = () => (dispatch) => {
    dispatch({
        type: actionTypes.PAUSE_SIMULATION
    });
    dispatch(stopJob('simulation'));
}

export const resetSimulation = () => (dispatch, getState) => {
    const state = getState();
    const { lastStartingCells } = state.simulation;
    dispatch({ type: actionTypes.RESET_SIMULATION });
    dispatch(stopJob('simulation'));
    dispatch(setCells( lastStartingCells.length && lastStartingCells || initCells(30,30) ));
}

export const setCells = (cells) => {
    return {
        type: actionTypes.SET_CELLS,
        payload: cells
    }
}

export const setSimulationSpeed = (ms) => {
    return {
        type: actionTypes.SET_SIMULATION_SPEED,
        payload: ms
    }
}
