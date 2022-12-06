//modal
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".example");
const closeButton = document.querySelector(".close-button");
const okButton = document.querySelector(".ok");
const cancelButton = document.querySelector(".cancel");

var isModal = false;

function createModal(text, param1, param2) {
  document.querySelector(".modal h4").textContent = text;
  if (param1 != null) {
    okButton.textContent = param1;
  } else {
    okButton.textContent = "Ok";
  }
  if (param2 != null) {
    cancelButton.textContent = param2;
  } else {
    cancelButton.textContent = "Cancel";
  }
}

function toggleModal() {
  let newModal = {
    text: "Voulez-vous vraiment passer en mode diaporama ?",
    param1: "Ok",
    param2: "Annuler",
  };
  createModal(newModal.text, newModal.param1, newModal.param2);
  modal.classList.add("show-modal");
  isModal = true;
  okButton.focus();
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

function confirm() {
  if (isModal) {
    console.log("confirm");
    modal.classList.remove("show-modal");
    isModal = false;
    return true;
  }
}
function cancel() {
  if (isModal) {
    modal.classList.remove("show-modal");
    console.log("cancel");
    isModal = false;
    return false;
  }
}

okButton.addEventListener("click", confirm);
cancelButton.addEventListener("click", cancel);
// trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", cancel);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    cancel();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    confirm();
  }
});

window.addEventListener("click", windowOnClick);
