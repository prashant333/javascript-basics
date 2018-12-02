let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (isVerified && isLoggedIn && hasPaymentToken) {
    console.log("allow access")
}
else if (isVerified || isGuest) {
    console.log("limited access")
}
else{
    console.log("access denied")
}
