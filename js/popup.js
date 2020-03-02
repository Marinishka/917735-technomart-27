var writeUsBtn = document.querySelector(".btn-contacts");
var writeUs = document.querySelector(".write-us");
var close = writeUs.querySelector(".modal-close");
var name = writeUs.querySelector("[name=name]");
var email = writeUs.querySelector("[name=email]");
var letter = writeUs.querySelector("[name=letter]");
var form = writeUs.querySelector("form");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

writeUsBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeUs.classList.remove("modal-closed");
    writeUs.classList.add("modal-show");
    name.focus();
    if (storage) {
        email.value = storage;
      }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeUs.classList.remove("modal-show");
    writeUs.classList.add("modal-closed");
    writeUs.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });

  form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !letter.value) {
      evt.preventDefault();
      writeUs.classList.remove("modal-error");
      writeUs.offsetWidth = writeUs.offsetWidth;
      writeUs.classList.add("modal-error");

    } else {
        if (isStorageSupport) {
            localStorage.setItem("email", email.value);
          }
      }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (writeUs.classList.contains("modal-show")) {
        writeUs.classList.add("modal-closed");
        writeUs.classList.remove("modal-show");
        writeUs.classList.remove("modal-error");
      }
    }
  });
