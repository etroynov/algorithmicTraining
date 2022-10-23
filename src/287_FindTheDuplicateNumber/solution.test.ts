import { findDuplicate, findDuplicateHard } from './solution';

describe('TwoSum', () => {
  it('should return number (hard)', () => {
    expect(findDuplicateHard([2, 7, 11, 11, 15])).toBe(11);
  });

  it('should return number (effective)', () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
  });
});