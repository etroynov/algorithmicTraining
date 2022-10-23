import { findErrorNums } from './solution';

describe('SetMismatch', () => {
  it('should return correct result', () => {
    expect(findErrorNums([1, 2, 2, 4])).toEqual([2, 3]);
  });
});