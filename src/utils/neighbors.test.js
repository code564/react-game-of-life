import initCells from './initializer';
import getNeighbors from './neighbors';

test('detecting all neighbors', () => {
    const cells = initCells(10,10);
    const cell = cells[0][0];
    const neighbors = getNeighbors(cell, cells, false);
    expect(neighbors.length).toEqual(3);

    const cell2 = cells[0][1];
    const neighbors2 = getNeighbors(cell2, cells, false);
    expect(neighbors2.length).toEqual(5);

    const cell3 = cells[1][1];
    const neighbors3 = getNeighbors(cell3, cells, false);
    expect(neighbors3.length).toEqual(8);
});

test('detecting only alive neighbors', () => {
    const cells = initCells(10,10);
    const aliveCell = cells[0][1];
    aliveCell.alive = true;
    const cell = cells[0][0];
    const aliveNeighbors = getNeighbors(cell, cells);
    expect(aliveNeighbors.length).toEqual(1);
});