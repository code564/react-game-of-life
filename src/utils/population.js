import getNeighbors from './neighbors';

export default (cells) => {
    const nextCells = [...cells];
    for (let row = 0; row < nextCells.length; row++) {
        for (let col = 0; col < nextCells[0].length; col++) {
            const cell = nextCells[row][col];
            const cellNeighbors = getNeighbors(cell, nextCells);
            if (cell.alive) {
                if (cellNeighbors.length < 2 || cellNeighbors.length > 3) cell.alive = false;
                else if (cellNeighbors.length === 2 || cellNeighbors.length === 3) cell.alive = true;
            } else {
                if (cellNeighbors.length === 3) cell.alive = true;
            }
            nextCells[row][col] = cell;
        }
    }
    return nextCells;
}