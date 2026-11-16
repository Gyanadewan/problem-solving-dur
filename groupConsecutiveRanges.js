
function groupConsecutiveRanges(numbers) {
  if (numbers.length === 0) return [];

  const sorted = [...numbers].sort((a, b) => a - b);

  const result = [];

  let start = sorted[0];
  let end = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === end) {
      continue;
    }

    if (sorted[i] === end + 1) {
      end = sorted[i];
    } else {
      result.push(
        start === end ? `${start}` : `${start}-${end}`
      );

      start = sorted[i];
      end = sorted[i];
    }
  }

  result.push(
    start === end ? `${start}` : `${start}-${end}`
  );

  return result;
}


console.log(groupConsecutiveRanges([1, 2, 3, 7, 8]));
console.log(groupConsecutiveRanges([10, 1, 2, 5, 6, 7]));
