import initCells from './initializer';
import getNextPopulation from './population';

const getAliveCells = (cells) => {
    const aliveCells = [];
    for (let row = 0; row < cells.length; row++) {
        for (let col = 0; col < cells[row].length; col++) {
            if (cells[row][col].alive) aliveCells.push({ ...cells[row][col] });
        }
    }
    return aliveCells;
}

test('test horizontal bar case', () => {
    const cells = initCells(5,5);
    cells[2][1].alive = true;
    cells[2][2].alive = true;
    cells[2][3].alive = true;

    const nextCells = getNextPopulation(cells);
    expect(nextCells[2][1].alive).toEqual(false);
    expect(nextCells[2][2].alive).toEqual(true);
    expect(nextCells[2][3].alive).toEqual(false);
    expect(nextCells[1][2].alive).toEqual(true);
    expect(nextCells[3][2].alive).toEqual(true);
    const aliveCells = getAliveCells(nextCells);
    expect(aliveCells.length).toEqual(3);
    
    const nextCells2 = getNextPopulation(nextCells);
    expect(nextCells2[2][1].alive).toEqual(true);
    expect(nextCells2[2][2].alive).toEqual(true);
    expect(nextCells2[2][3].alive).toEqual(true);
    expect(nextCells2[1][2].alive).toEqual(false);
    expect(nextCells2[3][2].alive).toEqual(false);
    const aliveCells2 = getAliveCells(nextCells2);
    expect(aliveCells2.length).toEqual(3);

    const nextCells3 = getNextPopulation(nextCells2);
    expect(nextCells3[2][1].alive).toEqual(false);
    expect(nextCells3[2][2].alive).toEqual(true);
    expect(nextCells3[2][3].alive).toEqual(false);
    expect(nextCells3[1][2].alive).toEqual(true);
    expect(nextCells3[3][2].alive).toEqual(true);
    const aliveCells3 = getAliveCells(nextCells3);
    expect(aliveCells3.length).toEqual(3);
});