import CreditCartValiditi from "../components/credit-cart-validiti/credit-cart-validiti";

test("Test innerHtml", () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector("#container");
  const widget = new CreditCartValiditi(container);
  widget.bindToDOM();
  expect(container.innerHTML).toEqual(CreditCartValiditi.markup);
});

const data = [
  [4556683942683049, true],
  [5552028236130664, true],
  [5552028236130665, false],
  [4556683942683043, false],
];

test.each(data)(
  "Test in active valid number = %s , result = %s ",
  (number, expected) => {
    document.body.innerHTML = '<div id="container"></div>';
    const container = document.querySelector("#container");
    const widget = new CreditCartValiditi(container);
    widget.bindToDOM();
    const input = container.querySelector(CreditCartValiditi.inputSelector);
    const event = new Event("input", { bubbles: true, cancelable: true });
    input.value = number;
    input.dispatchEvent(event);
    const button = container.querySelector(CreditCartValiditi.buttonSelector);
    expect(button.classList.contains("valid")).toBe(expected);
  }
);
