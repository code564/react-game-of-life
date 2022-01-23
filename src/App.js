import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import CellBoard from './components/CellBoard/CellBoard';
import initCells from './utils/initializer';
import { startSimulation, pauseSimulation, setCells } from './redux/actions';

function App() {

    //const [cells, setCells] = useState(initCells(30, 30));
    const cells = useSelector(state => state.simulation && state.simulation.cells || []);
    const dispatch = useDispatch();

    const handleStartClick = () => {
        dispatch(startSimulation());
    }

    const handlePauseClick = () => {
        dispatch(pauseSimulation());
    }

    const handleSetCells = (cells) => {
        dispatch(setCells(cells));
    }

    return (
        <div className="App">
            <button onClick={handleStartClick}>Start</button>
            <button onClick={handlePauseClick}>Pause</button>
            <CellBoard setCells={handleSetCells} cells={cells} />
        </div>
    );
}

export default App;
