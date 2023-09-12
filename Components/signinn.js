function signinn(params) {
  return `
    <div class="signin-img">
    <img src="https://www.jiomart.com/images/cms/wysiwyg/cms/1677147547_pp.png" alt="">
</div>

<div class="signin-card">
    <div class="card">
        <h2><b>Sign in to JioMart</b></h2>
        <p>to access your Addresses, Orders & Wishlist.</p>
        <input type="number" placeholder="Enter your mobile number" id="phNumber">
        <input type="number" placeholder="Enter OTP" id="otp">
        <button id="getOtp" onclick="getOtp()">Get OTP</button>
        <button id="signIn" onclick="signIn()">Sign In</button>
        <p>By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy & Legal
                Policy</a></p>
    </div>
</div>
    `;
}
export { signinn };
