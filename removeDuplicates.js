function removeDuplicateCharacters(str) {
      let result = "";
 for (let char of str) {
    if (!result.includes(char)){
        result+=char
    }
 }
  return result;
}
console.log(removeDuplicateCharacters("hello"));