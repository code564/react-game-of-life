export const actionTypes = {
    SET_CELLS: "SET_CELLS",
    SAVE_STARTING_CELLS: "SAVE_STARTING_CELLS",
    PAUSE_SIMULATION: "PAUSE_SIMULATION",
    START_SIMULATION: "START_SIMULATION",
    RESET_SIMULATION: "RESET_SIMULATION",
    SET_GENERATION_COUNT: "SET_GENERATION_COUNT",
    SET_SIMULATION_SPEED: "SET_SIMULATION_SPEED"
};

export const setCells = (cells) => {
    return {
        type: actionTypes.SET_CELLS,
        payload: cells
    }
};

export const setSimulationSpeed = (ms) => {
    return {
        type: actionTypes.SET_SIMULATION_SPEED,
        payload: ms
    }
};
