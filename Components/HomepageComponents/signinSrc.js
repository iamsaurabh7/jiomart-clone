let otp;
function getOtp() {
    let phNumber = document.querySelector("#phNumber").value
    if (phNumber.length != 10) {
        alert("Enter valid number")
        return false
    }
    otp = generateOTP();
    localStorage.setItem("jioMartUserData", JSON.stringify(Number(phNumber)))
    // console.log(otp);
    alert(otp)
}
function signIn() {
    let userOTP = document.querySelector("#otp").value
    if (otp != userOTP) {
        alert("Invalid OTP")
        return false
    }
    alert("Login Successful")
    window.location.href = "index.html";
    // alert(userOTP)
}

function generateOTP() {
    // Generate a random number between 1000 and 9999
    const min = 1000;
    const max = 9999;
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    return otp;
}

