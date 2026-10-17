function isValidEmail(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(email);
}
console.log(isValidEmail("user@example.com"));
// true

console.log(isValidEmail("invalid.email@"));
// false