//display location on map
function getMap(lat, lng) {
  const apiKey = "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";
  let gMapApiURL;
  const cityName = document.querySelector(".cityName").value;
  console.log(cityName);

  if (cityName != "") {
    gMapApiURL =
      "https://www.google.com/maps/embed/v1/place?q=" +
      cityName +
      "&key=" +
      apiKey;
  } else {
    gMapApiURL = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${lat},${lng}&zoom=13`;
  }
  let gMapiFrame = document.getElementById("gMapiFrame");
  gMapiFrame.src = gMapApiURL;
}
