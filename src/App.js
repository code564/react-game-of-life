import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import CellBoard from './components/CellBoard/CellBoard';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Control from './components/Control/Control';
import {
    setCells
} from './redux/actions';
import { 
    selectCells,
    selectIsReset
} from './redux/selector';

function App() {

    const cells = useSelector(selectCells);
    const isReset = useSelector(selectIsReset);
    const dispatch = useDispatch();

    const handleSetCells = (cells) => {
        dispatch(setCells(cells));
    }

    return (
        <Container maxWidth="md">
            <Stack alignItems="center" className="simulation-title">
                <Typography variant="h4" color="#1976D7" fontFamily="courier new" fontWeight="bold">{`<Conway's Game Of Life />`}</Typography>
            </Stack>
            <Control cells={cells} />
            <Stack alignItems="center">
                <CellBoard setCells={handleSetCells} cells={cells} isReset={isReset} />
            </Stack>
        </Container>
    )
}

export default App;
