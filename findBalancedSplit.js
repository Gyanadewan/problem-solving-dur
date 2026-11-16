
function findBalancedSplit(nums) {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  let leftSum = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];

    const rightSum = totalSum - leftSum;

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}
const nums = [1,2,3,6]
console.log(nums)