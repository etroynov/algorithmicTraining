/**
 * Brute-force solution
 * Time: O(n^2)
 *
 * @param {Array.<number>} nums
 * @return number
 */
export function findDuplicateHard(nums: number[]): number {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i) {
      result = nums[i];
    }
  }

  return result;
}

/**
 * Time and space effective
 * Time: O(n)
 * Space: O(1)
 *
 * @param {Array.<number>} nums
 * @return number
 */
export function findDuplicate(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[nums[0]];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  slow = 0;

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}
