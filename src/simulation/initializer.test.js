import initCells from './initializer';

test('cells initialized correctly in size', () => {
    const cells = initCells(10,10);
    expect(cells.length).toEqual(10);
    expect(cells[0].length).toEqual(10);
    expect(cells[9].length).toEqual(10);

    const cells2 = initCells(20,30);
    expect(cells2.length).toEqual(20);
    expect(cells2[0].length).toEqual(30);
    expect(cells2[19].length).toEqual(30);
});