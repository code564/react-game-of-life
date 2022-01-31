import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import CellBoard from './components/CellBoard/CellBoard';
import {
    startSimulation,
    pauseSimulation,
    stepSimulation,
    resetSimulation,
    setCells,
    setSimulationSpeed
} from './redux/actions';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import Chip from '@mui/material/Chip';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import StartPauseButton from './components/Control/StartPauseButton';
import TooltippedButton from './components/Control/TooltippedButton';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { 
    selectCells,
    selectGenerationCount,
    selectIsPaused,
    selectIsReset,
    selectSpeed
 } from './redux/selector';

function App() {

    const cells = useSelector(selectCells);
    const generationCount = useSelector(selectGenerationCount);
    const isPaused = useSelector(selectIsPaused);
    const isReset = useSelector(selectIsReset);
    const speed = useSelector(selectSpeed);
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

    const handleSimulationChangeSpeed = (event, value) => {
        dispatch(setSimulationSpeed(value));
    }

    return (
        <Container maxWidth="md">
            <Stack alignItems="center" className="simulation-title">
                <Typography variant="h4" color="#1976D7" fontFamily="courier new" fontWeight="bold">{`<Conway's Game Of Life />`}</Typography>
            </Stack>
            <Stack alignItems="center" className="simulation-controls">
                <Stack width={500} direction="row" spacing={2} justifyContent="space-between">
                    <Chip label={`Generations: ${generationCount}`} />
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <StartPauseButton 
                            handleStartClick={handleStartClick}
                            handlePauseClick={handlePauseClick}
                            isPaused={isPaused}
                            isReset={isReset}
                        />
                        <TooltippedButton onClick={handleStepClick} tooltip={"Next generation"} disabled={!isPaused}><SkipNextIcon /></TooltippedButton>
                        <TooltippedButton onClick={handleResetClick} tooltip={"Restart simulation"}><RestartAltIcon /></TooltippedButton>
                    </ButtonGroup>
                </Stack>
                <Stack width={500} className="simulation-speed">
                    <Slider
                        aria-label="Simulation speed (ms)"
                        value={speed}
                        onChange={handleSimulationChangeSpeed}
                        getAriaValueText={(value) => `${value} ms`}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value) => `${value} ms`}
                        step={100}
                        marks
                        min={-1000}
                        max={-100}
                        scale={x => -x}
                    />
                </Stack>
            </Stack>
            <Stack alignItems="center">
                <CellBoard setCells={handleSetCells} cells={cells} isReset={isReset} />
            </Stack>
        </Container>
    );
}

export default App;
