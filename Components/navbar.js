function navbar() {
  return `
    
    <div class="navbar-top">
    <div class="navbar-container">
        <div>
            <img src="https://www.jiomart.com/assets/ds2web/jds-icons/hamburger-icon.svg" alt="">
        </div>
        <div>
        <a href="./index.html">
            <img src="https://www.jiomart.com/assets/ds2web/images/jiomart_beta_logo.svg" alt="">
            </a>
        </div>
    </div>
    <div class="navbar-container">
        <div class="search-bar">
            <div class="search">
                <img src="https://www.jiomart.com/assets/ds2web/jds-icons/search-icon.svg" alt="">
                <input type="text" class="" placeholder="Search JioMart">
                <img src="https://www.jiomart.com/assets/ds2web/jds-icons/list-icon.svg" alt="">
            </div>
        </div>
        <div class="cart">
        <a href="cart.html">
            <img src="https://www.jiomart.com/assets/ds2web/jds-icons/cart-icon.svg" alt="">
        </div>
        <div class="profile">
        <a href="signin.html">
            <img src="https://www.jiomart.com/assets/ds2web/jds-icons/user-icon.svg" alt=""> 
        </div>
    </div>
</div>
<div class="navbar-bottom">
    <div class="bottom">
        <li class="nav-item custom-dropdown">
            <a class="nav-link" href="#">Groceries</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Fruits & Vegetables</a></li>
                <li><a class="dropdown-item" href="#">Dairy & Bakery</a></li>
                <li><a class="dropdown-item" href="#">Staples</a></li>
                <li><a class="dropdown-item" href="#">Snacks & Branded Foods</a></li>
                <li><a class="dropdown-item" href="#">Beverages</a></li>
                <li><a class="dropdown-item" href="#">Personal Care</a></li>
                <li><a class="dropdown-item" href="#">Home Care</a></li>
                <li><a class="dropdown-item" href="#">Apparel</a></li>
                <li><a class="dropdown-item" href="#">Home & Kitchen</a></li>
                <li><a class="dropdown-item" href="#">Mom & Baby Care</a></li>
                <li><a class="dropdown-item" href="#">Books</a></li>
                <li><a class="dropdown-item" href="#">Pets</a></li>
                <li><a class="dropdown-item" href="#">Beauty</a></li>
            </ul>
        </li>
        <li class="nav-item custom-dropdown">
            <a class="nav-link" href="#">Home & Kitchen</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Bathroom & Laundry Accessories</a></li>
                <li><a class="dropdown-item" href="#">Disposables</a></li>
                <li><a class="dropdown-item" href="#">Furnishing</a></li>
                <li><a class="dropdown-item" href="#">Furniture</a></li>
                <li><a class="dropdown-item" href="#">Garden & Outdoor</a></li>
                <li><a class="dropdown-item" href="#">Home Decor</a></li>
                <li><a class="dropdown-item" href="#">Kitchenware</a></li>
                <li><a class="dropdown-item" href="#">Prayer & Spiritual Needs</a></li>
                <li><a class="dropdown-item" href="#">Tableware</a></li>
            </ul>
        </li>
        <li class="nav-item custom-dropdown">
            <a class="nav-link" href="#">Fashion</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Men</a></li>
                <li><a class="dropdown-item" href="#">Women</a></li>
                <li><a class="dropdown-item" href="#">Boys</a></li>
                <li><a class="dropdown-item" href="#">Girls</a></li>
                <li><a class="dropdown-item" href="#">Junior Boys</a></li>
                <li><a class="dropdown-item" href="#">Junior Girls</a></li>
                <li><a class="dropdown-item" href="#">Infants</a></li>
                <li><a class="dropdown-item" href="#">Toys & Baby Care</a></li>
                <li><a class="dropdown-item" href="#">Home & Kitchen</a></li>
            </ul>
        </li>
        <li class="nav-item custom-dropdown">
            <a class="nav-link" href="#">Electronics</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Mobiles & Tablets</a></li>
                <li><a class="dropdown-item" href="#">TV & Speaker</a></li>
                <li><a class="dropdown-item" href="#">Home Appliances</a></li>
                <li><a class="dropdown-item" href="#">Computers</a></li>
                <li><a class="dropdown-item" href="#">Cameras</a></li>
                <li><a class="dropdown-item" href="#">Kitchen Appliances</a></li>
                <li><a class="dropdown-item" href="#">Personal Care & Grooming</a></li>
                <li><a class="dropdown-item" href="#">Smart Devices</a></li>
                <li><a class="dropdown-item" href="#">Gaming</a></li>
                <li><a class="dropdown-item" href="#">Accessories</a></li>
                <li><a class="dropdown-item" href="#">Smart Watch Accessories</a></li>
                <li><a class="dropdown-item" href="#">1 ton Air Conditioners</a></li>
                <li><a class="dropdown-item" href="#">Audio, Speaker Stands</a></li>
                <li><a class="dropdown-item" href="#">Phones</a></li>
                <li><a class="dropdown-item" href="#">Office Products</a></li>
                <li><a class="dropdown-item" href="#">Health Care Devices</a></li>
                <li><a class="dropdown-item" href="#">Electronic Musical Instruments</a></li>
                <li><a class="dropdown-item" href="#">Car Accessories</a></li>
                <li><a class="dropdown-item" href="#">Multimedia Speakers</a></li>
                <li><a class="dropdown-item" href="#">Smart Bands</a></li>
            </ul>
        </li>
        <li class="nav-item custom-dropdown">
            <a class="nav-link" href="#">Beauty</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Lips</a></li>
                <li><a class="dropdown-item" href="#">Nails</a></li>
                <li><a class="dropdown-item" href="#">Eyes</a></li>
                <li><a class="dropdown-item" href="#">Face Makeup</a></li>
                <li><a class="dropdown-item" href="#">Make-Up Tools & Brushes</a></li>
            </ul>
        </li>
        <li class="nav-item custom-dropdown">
            <a class="nav-link" href="#">Home Improvement</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Carpentry</a></li>
                <li><a class="dropdown-item" href="#">Electrical</a></li>
                <li><a class="dropdown-item" href="#">Hardware & Plumbing</a></li>
                <li><a class="dropdown-item" href="#">Home Cleaning & Organisation</a></li>
                <li><a class="dropdown-item" href="#">Industrial & Scientific Supplies</a></li>
                <li><a class="dropdown-item" href="#">Home Safety & Automation</a></li>
                <li><a class="dropdown-item" href="#">Kitchen & Bath Fixtures</a></li>
                <li><a class="dropdown-item" href="#">Packaging Supplies</a></li>
                <li><a class="dropdown-item" href="#">Paint, Wall Treatments & Supplies</a></li>
                <li><a class="dropdown-item" href="#">Power & Hand Tools</a></li>
            </ul>
        </li>
        <li class="nav-item custom-dropdown">
            <a class="nav-link" href="#">Sports, Toys & Luggage</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Toys & Games</a></li>
                <li><a class="dropdown-item" href="#">Bags & Travel Luggage</a></li>
                <li><a class="dropdown-item" href="#">Sporting Goods & Fitness Equipment</a></li>
                <li><a class="dropdown-item" href="#">Sporting Goods & Fitness Equipments</a></li>
            </ul>
        </li>

    </div>

</div>
    `;
}

export { navbar };
