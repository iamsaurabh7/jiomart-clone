function cart() {
  return `
  <div class="cart">

    
  <h2>My Cart</h2>
  <div class="cart-container">
      <div>
          <div class="cart-option">
              <div>JioMart</div>
              <div> Smart Bazaar</div>
          </div>
          <div class="items">
              <h4>Groceries Basket</h4>
              <div>
                  <img src="https://www.jiomart.com/images/product/original/490065628/prabhuji-aloo-bhujia-200-g-product-images-o490065628-p490065628-0-202301141252.jpg?im=Resize=(240,240)"
                      alt="">
                  <span class="description">
                      <p>Prabhuji Aloo Bhujia 200 g</p>
                      <!-- <br> -->
                      <b>₹49.00₹65.00</b> <br>
                      <b>You Save ₹16.00</b> <br>
                      <p>Sold by: Reliance Retail</p>
                  </span>
              </div>
              <!-- <div></div> -->
          </div>
      </div>
      <div>
          <img src="./Images/cart-1.png" alt="">
          <div class="bill">
              <h5><b>Payment Details</b></h5>
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
              <a href="./address.html">
                  <button><b>Place order</b></button>

              </a>
          </div>
      </div>
  </div>
  </div>
    `;
}

export { cart };
