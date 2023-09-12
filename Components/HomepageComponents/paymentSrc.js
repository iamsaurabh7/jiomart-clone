document.addEventListener("DOMContentLoaded", function () {
  const placeOrderBtn = document.getElementById("placeOrderBtn");
  const popup = document.getElementById("popup");
  const okBtn = document.getElementById("okBtn");

  placeOrderBtn.addEventListener("click", function () {
    popup.style.display = "flex";
  });

  okBtn.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});
