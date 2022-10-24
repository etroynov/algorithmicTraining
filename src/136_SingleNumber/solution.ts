/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function singleNumber(nums: number[]): number {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let counter = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        counter++;
      }
    }

    if (counter === 1) {
      result = nums[i];
    }
  }

  return result;
}
