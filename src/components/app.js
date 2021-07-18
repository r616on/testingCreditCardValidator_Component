import CreditCartValiditi from "./credit-cart-validiti/credit-cart-validiti";

document.addEventListener("DOMContentLoaded", () => {
  const perent = document.querySelector(".conteiner");
  const widget = new CreditCartValiditi(perent);
  widget.bindToDOM();
});
