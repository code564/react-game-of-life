const neighborCoords = [
    //[row, col]
    [-1,-1],
    [-1,0],
    [-1,1],
    [0,-1],
    [0,1],
    [1,-1],
    [1,0],
    [1,1]
];

export default (cell, cells, aliveOnly = true) => {
    const maxRows = cells.length - 1;
    const maxCols = cells[0].length - 1;
    const neighbors = [];
    for (let [row, col] of neighborCoords) {
        const newRow = cell.row + row;
        const newCol = cell.col + col;
        if (newRow < 0 || newRow > maxRows || newCol < 0 || newCol > maxCols) continue;
        else neighbors.push(cells[newRow][newCol]);
    }
    return aliveOnly ? neighbors.filter(n => n.alive) : neighbors;
};