
function minRemovalsToBalance(s) {
  let open = 0;
  let removals = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      open++;
    } else {
      if (open > 0) {
        open--;
      } else {
        removals++;
      }
    }
  }

  return removals + open;
}
