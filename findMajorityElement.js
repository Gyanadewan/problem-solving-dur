function findMajorityElement(nums){
    let count = {};
for (let num of nums)  {
    count[num] = (count[num] || 0) + 1;
}
for (let num in count) {
    if (count[num] > nums.length / 2) {
      return Number(num);
    }
  }
  return null;
}
const nums = [3,3,3,3,3, 1, 1, 1, 2, 2]
console.log(findMajorityElement(nums))