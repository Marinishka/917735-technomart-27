var buy = document.querySelectorAll(".btn-buy");
var bookmarks = document.querySelectorAll(".btn-bookmarks");
var addItem = document.querySelector(".item-in-basket");
var close = addItem.querySelector(".modal-close");
var continueShoping = addItem.querySelector(".modal-btn-continue-shopping");
var inTruck = document.getElementById(".in-truck");
var goods = document.querySelector(".goods");

buy.forEach(function(btn) {
    btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    addItem.classList.remove("modal-closed");
    addItem.classList.add("modal-show");  
    }); 
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    addItem.classList.remove("modal-show");
    addItem.classList.add("modal-closed");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (addItem.classList.contains("modal-show")) {
        addItem.classList.remove("modal-show");
        addItem.classList.add("modal-closed");
        addItem.classList.remove("modal-error");
      }
    }
  });

continueShoping.addEventListener("click", function(evt) {
    evt.preventDefault();
    addItem.classList.remove("modal-show");
    addItem.classList.add("modal-closed");
});
