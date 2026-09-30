function swapKeysAndValues(obj) {
   const result  = {}
   for (const [key, value] of Object.entries(obj)) {
        result[value] = key;
    }
    return result
}
console.log(swapKeysAndValues({ a: "x", b: "y" }));