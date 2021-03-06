const Cell = (props) => {
    return (
        <div
            onClick={props.onClick}
            style={{
                width: 20,
                height: 20,
                backgroundColor: (props.cell.alive && '#F9F871') || '#1976D7',
                border: "1px solid #009EEC"
            }}
        />
    )
}

export default Cell;