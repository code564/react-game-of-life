import { Fragment } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import TooltippedButton from './TooltippedButton';

const StartPauseButton = (props) => {
    return (
        <Fragment>
            {(props.isPaused || props.isReset) ?
                <TooltippedButton onClick={props.handleStartClick} tooltip={"Start/Continue simulation"}><PlayArrowIcon /></TooltippedButton> :
                <TooltippedButton onClick={props.handlePauseClick} tooltip={"Pause simulation"}><PauseIcon /></TooltippedButton>}
        </Fragment>
    )
}

export default StartPauseButton;