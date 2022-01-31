import Cell from '../Cell/Cell';

const CellBoard = (props) => {
    const { cells, setCells, isReset } = props;

    const handleCellClick = (row, col) => {
        if (!isReset) return;
        const cellsCopy = [ ...cells ];
        const clickedCell = cellsCopy[row][col];
        clickedCell.alive = !clickedCell.alive;
        cellsCopy[row][col] = clickedCell;
        setCells(cellsCopy);
    }

    return (
        <div
            disabled={true}
            style={{
                display: "inline-grid",
                gridTemplateColumns: `repeat(${cells[0].length}, 20px)`
            }}
        >
            {cells.map((rows) => 
                rows.map((cell) => {
                    return <Cell onClick={() => handleCellClick(cell.row, cell.col)} cell={cell} />
                })
            )}
        </div>
    )
}

export default CellBoard;