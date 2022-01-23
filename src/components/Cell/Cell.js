const Cell = (props) => {
    return (
        <div
            key={`${props.cell.row}-${props.cell.col}`}
            onClick={props.onClick}
            style={{
                width: 20,
                height: 20,
                backgroundColor: props.cell.alive && 'black' || 'gray',
                border: "1px solid black"
            }}
        />
    )
}

export default Cell;