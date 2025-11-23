const password="password123";
const crypto=require("crypto");

console.log("\n MD5 Hash: ");
const md5Hash=crypto.createHash("md5").update(password).digest("hex"); // not recommended

console.log(`Input password: ${password} and output: ${md5Hash}`);

//! Secure Hashing 
console.log("-".repeat(100));
const sha256Hash=crypto.createHash("sha256").update(password).digest("hex");
console.log(`Input password: ${password} and output sha256Hash: ${sha256Hash}`);

//! More Secure
console.log("-".repeat(100));
const sha512Hash=crypto.createHash("sha512").update(password).digest("hex");
console.log(`Input password: ${password} and output sha512Hash: ${sha512Hash}`);