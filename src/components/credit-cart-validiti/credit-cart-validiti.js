import MoonAlgorithm from "../libs/MoonAlgorithm";

export default class CreditCartValiditi {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return ` 
        <div class="credit-cart-validiti">
      <h1 class="title">Credit Cart Validation Vidget</h1>
      <ul class="img">
        <li class="img__item visa"></li>
        <li class="img__item mastercard"></li>
        <li class="img__item jcb"></li>
        <li class="img__item discover"></li>
        <li class="img__item mir"></li>
      </ul>
      <div class="input-row">
        <input type="text" name="number" class="input-row__input" />
        <button disabled class="input-row__button">Click to validate</button>
      </div>
    </div> `;
  }

  static get inputSelector() {
    return ".input-row__input";
  }

  static get buttonSelector() {
    return ".input-row__button";
  }

  static get widgetSelector() {
    return ".credit-cart-validiti";
  }

  static get logoImgSelector() {
    return ".img__item";
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const widget = this.parentEl.querySelector(this.constructor.widgetSelector);
    widget.addEventListener("input", (evt) => this.onInput(evt));
  }

  onInput(e) {
    const logoArr = Array.from(
      this.parentEl.querySelectorAll(this.constructor.logoImgSelector)
    );
    const button = this.parentEl.querySelector(this.constructor.buttonSelector);
    e.target.value = e.target.value.trim();
    logoArr.forEach((item) => {
      if (item.classList.contains("activ")) {
        item.classList.remove("activ");
      }
    });
    if (e.target.value[0]) {
      this.selectLogo(+e.target.value[0]);
    }
    if (+e.target.value.length === 16 && MoonAlgorithm(+e.target.value)) {
      button.disabled = false;
      button.classList.add("valid");
    } else {
      button.disabled = true;
      if (button.classList.contains("valid")) {
        button.classList.remove("valid");
      }
    }
  }

  selectLogo(number) {
    const logoArr = Array.from(
      this.parentEl.querySelectorAll(this.constructor.logoImgSelector)
    );
    const addActiv = (str) => {
      logoArr.forEach((item) => {
        if (item.classList.contains(str)) {
          item.classList.add("activ");
        }
      });
    };

    if (number === 2) {
      addActiv("mir");
    } else if (number === 4) {
      addActiv("visa");
    } else if (number === 5) {
      addActiv("mastercard");
    } else if (number === 3) {
      addActiv("jcb");
    } else if (number === 6) {
      addActiv("discover");
    }
  }
}
