function validateIP(ip) {
  const pattern =
    /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return pattern.test(ip);
}

console.log(validateIP("192.168.0.1")); // true
console.log(validateIP("256.0.0.1")); // false
console.log(validateIP("10.0.0")); // false
console.log(validateIP("abc.def.ghi.jkl")); // false
