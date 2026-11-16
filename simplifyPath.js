
function simplifyPath(path) {
  let stack = [];

  let parts = path.split("/");

  for (let part of parts) {
    if (part === "" || part === ".") {
      continue;
    }

    if (part === "..") {
      stack.pop();
    } else {
      stack.push(part);
    }
  }

  return "/" + stack.join("/");
}
console.log(simplifyPath("/home/"));

console.log(simplifyPath("/home/user/../docs/./file.txt"));

console.log(simplifyPath("/a/./b/../../c/"));