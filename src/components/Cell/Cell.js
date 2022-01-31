const Cell = (props) => {
    return (
        <div
            key={`${props.cell.row}-${props.cell.col}`}
            onClick={props.onClick}
            style={{
                width: 20,
                height: 20,
                backgroundColor: props.cell.alive && '#A3DAFF' || '#1976D7',
                border: "1px solid #009EEC"
            }}
        />
    )
}

export default Cell;