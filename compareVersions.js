
function compareVersions(version1, version2) {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");

  const maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    const num1 = Number(arr1[i] || 0);
    const num2 = Number(arr2[i] || 0);

    if (num1 > num2) {
      return 1;
    }

    if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}

console.log(compareVersions(version1 = "1.10", version2 = "1.2"))