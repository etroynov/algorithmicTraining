/**
 * @param {Array.<number>} nums - list of nums
 * @return {number[]}
 */
export function findErrorNums(nums: number[]) {
  let acc = [];
  let result = [];
  let step = ((1 + nums.length) * nums.length) / 2;

  for (let i = 0; i < nums.length; i++) {

    if (acc[nums[i]] === undefined) {
      acc[nums[i]] = 0;
    }

    acc[nums[i]]++;

    if (acc[nums[i]] === 1) {
      step -= nums[i];
    } else {
      result.push(nums[i]);
    }
  }

  result.push(step);

  return result;
}
