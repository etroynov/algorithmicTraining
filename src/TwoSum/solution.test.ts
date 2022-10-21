import { twoSum } from './solution';

describe('TwoSum', () => {
  it('should return array with indexes', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});