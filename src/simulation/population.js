import { cloneDeep } from 'lodash';
import getNeighbors from './neighbors';

export default (cells) => {
    const nextCells = cloneDeep(cells);
    for (let row = 0; row < cells.length; row++) {
        for (let col = 0; col < cells[0].length; col++) {
            const cell = cells[row][col];
            const cellNeighbors = getNeighbors(cell, cells);
            if (cell.alive) {
                if (cellNeighbors.length < 2 || cellNeighbors.length > 3) nextCells[row][col].alive = false;
                else if (cellNeighbors.length === 2 || cellNeighbors.length === 3) nextCells[row][col].alive = true;
            } else {
                if (cellNeighbors.length === 3) nextCells[row][col].alive = true;
            }
        }
    }
    return nextCells;
}