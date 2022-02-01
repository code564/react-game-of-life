import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const TooltippedButton = (props) => {
    return (
        <Tooltip title={props.tooltip}>
            <Button onClick={props.onClick} variant={props.variant} disabled={props.disabled}>{props.children}</Button>
        </Tooltip>
    )
}

export default TooltippedButton;