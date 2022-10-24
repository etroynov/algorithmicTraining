import { singleNumber } from './solution';

describe('TwoSum', () => {
  it('should return array with indexes', () => {
    expect(singleNumber([4, 1, 1, 2, 2])).toBe(4);
  });
});