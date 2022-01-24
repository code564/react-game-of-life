import initCells from './initializer';
import getNextPopulation from './population';

test('cells initialized correctly in size', () => {
    const cells = initCells(5,5);
    
    //expect(cells.length).toEqual(10);
});