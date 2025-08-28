const accountId=144553
let accountEmail="saniha@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState

//accountId=2 // not allowed beacuse it is a constant

accountEmail="san@google.com"
accountPassword="2212111"
accountCity="Bengaluru"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var, because of the issue in the block scope and the functional scope
*/