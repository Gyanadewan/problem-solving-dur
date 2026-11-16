
function moveZeros(nums) {
  let nonZeros = nums.filter(num => num !== 0);
  let zeros = nums.filter(num => num === 0);

  return [...nonZeros, ...zeros];
}

console.log(moveZeros([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]

console.log(moveZeros([0, 0, 1]));
// [1, 0, 0]
