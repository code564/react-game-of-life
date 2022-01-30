import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import CellBoard from './components/CellBoard/CellBoard';
import initCells from './simulation/initializer';
import { startSimulation, pauseSimulation, stepSimulation, resetSimulation, setCells } from './redux/actions';

function App() {

    const cells = useSelector(state => state.simulation && state.simulation.cells || []);
    const generationCount = useSelector(state => state.simulation && state.simulation.generationCount || 1);
    const dispatch = useDispatch();

    const handleStartClick = () => {
        dispatch(startSimulation());
    }

    const handlePauseClick = () => {
        dispatch(pauseSimulation());
    }

    const handleStepClick = () => {
        dispatch(stepSimulation());
    }

    const handleResetClick = () => {
        dispatch(resetSimulation());
    }

    const handleSetCells = (cells) => {
        dispatch(setCells(cells));
    }

    return (
        <div className="App">
            <span>Generation: {generationCount}</span>
            <button onClick={handleStartClick}>Start</button>
            <button onClick={handlePauseClick}>Pause</button>
            <button onClick={handleStepClick}>{'>>'}</button>
            <button onClick={handleResetClick}>Reset</button>
            <CellBoard setCells={handleSetCells} cells={cells} />
        </div>
    );
}

export default App;
