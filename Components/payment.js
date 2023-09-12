function payment() {
  return `
    <div class="payment-container">
    <h3><b>Select payment method</b></h3>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
        <label class="form-check-label" for="gridRadios1">
            Credit Card
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
        <label class="form-check-label" for="gridRadios2">
            Debit Card
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
        <label class="form-check-label" for="gridRadios2">
            UPI
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
        <label class="form-check-label" for="gridRadios2">
            Netbanking
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
        <label class="form-check-label" for="gridRadios2">
            Wallets (Paytm / Phonepe)
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
        <label class="form-check-label" for="gridRadios2">
            COD ( Cash on delhivery)
        </label>
    </div>
</div>
<div class="place-order">
    <div class="bill">
        <h3><b>Payment Details</b></h3>
        <p>MRP
            Total.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ₹50.00</p>
        <p>Product
            Discount.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            - ₹25.00
        </p>
        <p>Delivery
            Fee.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ₹40.00</p>
        <p>Total.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ₹65.00</p>

        <button id="placeOrderBtn"><b>Place Order</b></button>
        <div class="popup" id="popup">
            <div class="popup-content">
                <h2>Congratulations! Order Placed</h2>
                <button id="okBtn">OK</button>
            </div>
        </div>
    </div>
</div>
    `;
}

export { payment };
