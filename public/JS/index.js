//Header Across Pages
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="navbar__container">
          <a href="/" id="navbar__logo">Fit for Life </a>
          <div class="navbar__toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <ul class="navbar__menu">
            <li class="navbar__item">
              <a href="/" class="navbar__links" id="home-page">Home</a>
            </li>
            <li class="navbar__item">
              <a href="/about" class="navbar__links" id="our-story"
              >Our Story</a
              >
            </li>
            <li class="navbar__item">
              <a
                href="/resources"
                class="navbar__links"
                id="resource-center"
                >Resource Center</a
              >
            </li>
            <li class="navbar__item">
              <a href="/contact" class="navbar__links" id="contact"
                >Contact Us</a
              >
            </li>
            <li class="navbar__btn">
              <a href="/membership" class="button" id="membership"
                >Make an Appointment</a
              >
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define("my-header", MyHeader);

//Footer Across Pages
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer">
      <div class="footer__container">
        <ul class="footer__menu">
          <li class="footer__item">
            <a href="/" class="footer__links" id="footer-home-page">Home</a>
          </li>

          <li class="footer__item">
            <a href="/membership" class="footer__links" id="membership"
              >New Membership</a
            >
          </li>
          <li class="footer__item">
            <a href="/contact" class="footer__links" id="footer-contact"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </div>
    `;
  }
}

customElements.define("my-footer", MyFooter);

// Display Mobile Menu
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

const mobileMenu = () => {
  menu.classList.toggle("active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

const navbar = document.querySelector(".navbar");
// const hero = document.querySelector(".hero");

const moveNavbar = () => {
  if (window.scrollY > 500) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};

window.addEventListener("scroll", moveNavbar);

// error/sucess messages (login)
function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove(
    "form__message--success, form__message--error"
  );
  messageElement.classList.add("form__message--${type}");
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = message;
}

// Login/sign up toggle
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    createAccountForm.classList.add("form--hidden");
    loginForm.classList.remove("form--hidden");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //figure out login... AJAX? Fetch?

    setFormMessage(loginForm, "error", "Invalid username/password");
  });
});
