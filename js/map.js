var map = document.querySelector(".map");
var modalMap = document.querySelector(".modal-map");
var close = modalMap.querySelector(".modal-close");

map.addEventListener("click", function(evt){
  evt.preventDefault();
  modalMap.classList.remove("modal-closed");
  modalMap.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-closed");
    setTimeout(function(){
      writeUs.classList.remove("modal-show");
    }, 700);
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalMap.classList.contains("modal-show")) {
      modalMap.classList.add("modal-closed");
      setTimeout(function(){
        modalMap.classList.remove("modal-show");
        modalMap.classList.remove("modal-error");
      }, 700);
    }
  }
});