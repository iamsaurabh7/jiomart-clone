function address() {
  return `
    <div class="address-container row">
    <div class="address-text col-5">
        <h3><b>Delhivery Address</b></h3>
        <input type="text" placeholder="Address 1">
        <input type="text" placeholder="Address 2">
        <input type="text" placeholder="Locality">
        <input type="text" placeholder="Zip code">
        <input type="text" placeholder="City" class="cityName">
        <input type="text" placeholder="State">
        <button id="submitBtn" class="btn btn-primary" onclick="getMap()">Add address</button>
    </div>
    <div class="address-map col-4">

        <div style="overflow:hidden;resize:none;max-width:100%;width:500px;height:500px;" id="myMap">
            <div id="canvas-for-googlemap" style="height:100%; width:100%;max-width:100%;"><iframe
                    id="gMapiFrame" style="height:100%;width:100%;border:0;" frameborder="0"
                    src="https://www.google.com/maps/embed/v1/place?q=India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
            </div>

        </div>

    </div>
    <div class="address submit col-3">
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
            <a href="./payment.html">
                <button><b>Make payment</b></button>

            </a>
        </div>
    </div>
</div>
    `;
}

export {address}