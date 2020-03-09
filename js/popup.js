var writeUsBtn = document.querySelector(".btn-contacts");
var writeUs = document.querySelector(".write-us");
var close = document.querySelectorAll(".modal-close");
var login = document.querySelector("[name=login]");
var email = document.querySelector("[name=email]");
var letter = document.querySelector("[name=letter]");
var form = document.querySelector(".form");
var map = document.querySelector(".map");
var modalMap = document.querySelector(".modal-map");
var modal = document.querySelectorAll(".modal");
var buy = document.querySelectorAll(".btn-buy");
var continueShoping = document.querySelector(".modal-btn-continue-shopping");
var addItem = document.querySelector(".item-in-basket");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
};

if (form) {
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
};

if (form) {
  form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !letter.value) {
      evt.preventDefault();
      writeUs.classList.remove("modal-error");
      writeUs.offsetWidth = writeUs.offsetWidth;
      writeUs.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("email", email.value);
      };
    };
  });
};


if (writeUsBtn && login && writeUs) {
  writeUsBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeUs.classList.remove("modal-closed");
    writeUs.classList.add("modal-show");
    login.focus();
    if (storage) {
      email.value = storage;
    }
  });
};

close.forEach(function(btn) {
  btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.forEach(function(mod){
      mod.classList.add("modal-closed");
      mod.classList.remove("modal-error");
      setTimeout(function(){
        mod.classList.remove("modal-show");
      }, 700);
    });
  });
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modal.forEach(function(mod){
      mod.classList.add("modal-closed");
      mod.classList.remove("modal-error");
      setTimeout(function(){
        mod.classList.remove("modal-show");
      }, 700);
    });
  };
});

if (map) {
  map.addEventListener("click", function(evt){
    evt.preventDefault();
    modalMap.classList.remove("modal-closed");
    modalMap.classList.add("modal-show");
  });
};

if (buy && addItem) {
  buy.forEach(function(btn) {
    btn.addEventListener("click", function(evt) {
      evt.preventDefault();
      addItem.classList.remove("modal-closed");
      addItem.classList.add("modal-show");  
    }); 
  });
};

if (continueShoping) {
  continueShoping.addEventListener("click", function(evt) {
    evt.preventDefault();
    addItem.classList.add("modal-closed");
    setTimeout(function(){
      writeUs.classList.remove("modal-show");
      writeUs.classList.remove("modal-error");
    }, 700);
  });
};