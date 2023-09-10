let currentIndex = 0;
const imageLinks = [
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1691612739_Aaj_Ki_Deals_Desktop.jpg?im=Resize=(1680,320)",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694264354_Unmissable_Deals_on_Kitchen__Home___Personal_Care_Appliances.jpg?im=Resize=(1680,320)",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694263886_Shop_For_Monthly_Essentials_Desktop.jpg?im=Resize=(1680,320)",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694108988_Big_Savings_On_Daily_Essentials_Desktop.jpg?im=Resize=(1680,320)",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694263485_Ultimate_savings_on_home_furnishing_Desktop.jpg?im=Resize=(1680,320)",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694081135_Ethnic_Fest_D.jpg?im=Resize=(1680,320)",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694263346_Best_selling_furniture_Desktop.jpg?im=Resize=(1680,320)",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694071534_Lowest_Prices_Ever_Desktop.jpg?im=Resize=(1680,320)",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694264140_Best_Selling_Smartphones.jpg?im=Resize=(1680,320)",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694109131_Shop_For_Monthly_Essentials_Desktop.jpg?im=Resize=(1680,320)",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694080961_Check_out_our_wide_range_of_kitchenware_Desktop.jpg?im=Resize=(1680,320)",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694263975_Discounted_Delights_on_Laptops.jpg?im=Resize=(1680,320)",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1693457688_1680_2.jpg?im=Resize=(1680,320)",
];
const slider = document.getElementById("imageSlider");

function showSlide(index) {
  //   console.log(index);
  if (index >= imageLinks.length || index < 0) {
    index = 0;
    currentIndex = 0;
  }
  const divElement = document.createElement("img");
  divElement.src = imageLinks[index];

  slider.innerHTML = "";
  slider.append(divElement);
}

function prevSlide() {
  // currentIndex = Math.max(currentIndex - 1, 0);
  currentIndex -= 1;
  showSlide(currentIndex);
}
document.querySelector(".prev-btn").addEventListener("click", prevSlide);

function nextSlide() {
  // currentIndex = Math.min(currentIndex + 1, imageLinks.length - 1);
  currentIndex += 1;
  showSlide(currentIndex);
}
document.querySelector(".next-btn").addEventListener("click", nextSlide);

// Initialize the slider with the first image
showSlide(currentIndex);
setInterval(() => {
  currentIndex += 1;
  showSlide(currentIndex);
}, 2500);
