function isValidBdMobileNumber(phoneNumber) {
  return /^(?:01[3-9]\d{8}|\+8801[3-9]\d{8}|8801[3-9]\d{8})$/.test(phoneNumber);
}

console.log(isValidBDMobile("01712345678"));
// true

console.log(isValidBDMobile("+8801987654321"));