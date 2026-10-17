function longestIncreasingStreak(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let current = 1;
  let longest = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      current++;
    } else {
      current = 1;
    }

    if (current > longest) {
      longest = current;
    }
  }

  return longest;
}

console.log(longestIncreasingStreak([1, 2, 3, 1, 2]));
// 3

console.log(longestIncreasingStreak([5, 4, 3, 2, 1]));
// 1

console.log(longestIncreasingStreak([1, 2, 3, 4, 5]));
// 5