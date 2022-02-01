import { createSelector } from 'reselect'

const selectSimulation = (state) => state.simulation;

export const selectCells = createSelector(
    selectSimulation,
    simulation => (simulation && simulation.cells) || []
);

export const selectGenerationCount = createSelector(
    selectSimulation,
    simulation => (simulation && simulation.generationCount) || 0
);

export const selectIsPaused = createSelector(
    selectSimulation,
    simulation => (simulation && simulation.isPaused) || false
);

export const selectIsReset = createSelector(
    selectSimulation,
    simulation => (simulation && simulation.isReset) || false
);

export const selectSpeed = createSelector(
    selectSimulation,
    simulation => (simulation && simulation.speed) || -1000
);