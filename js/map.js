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
    modalMap.classList.remove("modal-show");
});