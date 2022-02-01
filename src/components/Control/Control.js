import { useDispatch, useSelector } from 'react-redux'
import ButtonGroup from '@mui/material/ButtonGroup';
import Chip from '@mui/material/Chip';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ClearIcon from '@mui/icons-material/Clear';
import StartPauseButton from './StartPauseButton';
import TooltippedButton from './TooltippedButton';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import {
    startSimulation,
    pauseSimulation,
    stepSimulation,
    resetSimulation,
    clearBoard
} from '../../redux/thunks';
import {
    setSimulationSpeed
} from '../../redux/actions';
import { 
    selectGenerationCount,
    selectIsPaused,
    selectIsReset,
    selectSpeed
} from '../../redux/selector';

const Control = ({ cells }) => {

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

    const handleClearClick = () => {
        dispatch(clearBoard());
    }

    const handleSimulationChangeSpeed = (event, value) => {
        dispatch(setSimulationSpeed(value));
    }

    const getPopulationCount = () => {
        let populationCont = 0;
        for (let row = 0; row < cells.length; row++) {
            for (let col = 0; col < cells[row].length; col++) {
                populationCont += (cells[row][col].alive ? 1 : 0);
            }
        }
        return populationCont;
    }

    return (
        <Stack alignItems="center" className="simulation-controls">
            <Stack width={500} direction="row" spacing={2} justifyContent="space-between">
                <Chip label={`Generations: ${generationCount}`} />
                <Chip label={`Population: ${getPopulationCount()}`} />
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
                <TooltippedButton
                    variant="contained"
                    onClick={handleClearClick}
                    tooltip={"Clear board"}
                    disabled={!isReset}>
                        <ClearIcon />
                </TooltippedButton>
            </Stack>
            <Stack width={500} className="simulation-speed">
                <Slider
                    disabled={!isPaused && !isReset}
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
    )
}

export default Control;