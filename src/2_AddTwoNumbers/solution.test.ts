import { addTwoNumbers } from './solution';
import { arrayToListNode } from './utils';

const l1 = arrayToListNode([2, 4, 3]);
const l2 = arrayToListNode([5, 6, 4]);
const l3 = arrayToListNode([7, 0, 8].reverse());

describe('addTwoNumbers', () => {
  it('should return correct result', () => {
    const result = addTwoNumbers(l1, l2);

    expect(result).toEqual(l3);
  });
});
