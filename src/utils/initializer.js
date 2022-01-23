export default (rows, cols) => {
    const cells = [];
    for (let row = 0; row < rows; row++) {
        const cellRow = [];
        for (let col = 0; col < cols; col++) {
            cellRow.push({ alive: false, row, col });
        }
        cells.push(cellRow);
    }
    return cells;
}