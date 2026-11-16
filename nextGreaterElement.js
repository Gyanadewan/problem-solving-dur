function nextGreaterElement(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let nextGreater = -1;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        nextGreater = nums[j];
        break;
      }
    }

    result.push(nextGreater);
  }

  return result;
}
console.log(nextGreaterElement([2,4,6,2,2,8,8]))