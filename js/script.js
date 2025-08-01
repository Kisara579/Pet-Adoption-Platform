//login page valid

function showMessage_Login(input, message, type) {
  const msg_login = input.parentNode.querySelector(".small-login");
  msg_login.innerText = message;
  input.className = type ? "success-login" : "error-login";
  return type;
}

function showError_Login(input, message) {
  return showMessage_Login(input, message, false);
}
function showSuccess_Login(input) {
  return showMessage_Login(input, "", true);
}

function hasValue_Login(input, message) {
  if (input.value.trim() === "") {
    return showError_Login(input, message);
  }
  return showSuccess_Login(input);
}

const login_form = document.getElementById("login-form");
const EMAIL_REQUIRED_LOGIN = "Please Enter Your Email";
const PASSWORD_REQUIRED_LOGIN = "Please Enter Your Password";

if (login_form) {
  login_form.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailvalid_login = hasValue_Login(
      login_form.elements["login-email"],
      EMAIL_REQUIRED_LOGIN
    );
    const passwordvalid_login = hasValue_Login(
      login_form.elements["login-password"],
      PASSWORD_REQUIRED_LOGIN
    );

    if (emailvalid_login && passwordvalid_login) {
      alert("Login Successfully");
    }
  });
}

//signup page valid
function showMessage_Signup(input, message, type) {
  const msg_signup = input.parentNode.querySelector(".small-signup");
  msg_signup.innerText = message;
  input.className = type ? "success-signup" : "error-signup";
  return type;
}

function showError_Signup(input, message) {
  return showMessage_Signup(input, message, false);
}

function showSuccess_Signup(input) {
  return showMessage_Signup(input, "", true);
}

function hasValue_signup(input, message) {
  if (input.value.trim() === "") {
    return showError_Signup(input, message);
  }
  return showSuccess_Signup(input);
}

const signup_form = document.getElementById("signup-form");

const NAME_REQUIRED_SIGNUP = "Please Enter Your Name";
const EMAIL_REQUIRED_SIGNUP = "Please Enter Your Email";
const ADDRESS_REQUIRED_SIGNUP = "Please Enter Your Address";
const NUMBER_REQUIRED_SIGNUP = "Please Enter Your Phone Number";
const PASSWORD1_REQUIRED_SIGNUP = "Please Enter Your Password";
const PASSWORD2_REQUIRED_SIGNUP = "Confirm Your Password";

if (signup_form) {
  signup_form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namevalid_signup = hasValue_signup(
      signup_form.elements["signup-name"],
      NAME_REQUIRED_SIGNUP
    );
    const emailvalid_signup = hasValue_signup(
      signup_form.elements["signup-email"],
      EMAIL_REQUIRED_SIGNUP
    );
    const addressvalid_signup = hasValue_signup(
      signup_form.elements["signup-address"],
      ADDRESS_REQUIRED_SIGNUP
    );
    const numbervalid_signup = hasValue_signup(
      signup_form.elements["signup-number"],
      NUMBER_REQUIRED_SIGNUP
    );
    const password1valid_signup = hasValue_signup(
      signup_form.elements["signup-password1"],
      PASSWORD1_REQUIRED_SIGNUP
    );
    const password2valid_signup = hasValue_signup(
      signup_form.elements["signup-password2"],
      PASSWORD2_REQUIRED_SIGNUP
    );

    if (
      namevalid_signup &&
      emailvalid_signup &&
      addressvalid_signup &&
      numbervalid_signup &&
      password1valid_signup &&
      password2valid_signup
    ) {
      if (
        signup_form.elements["signup-password1"].value !==
        signup_form.elements["signup-password2"].value
      ) {
        showError_Signup(
          signup_form.elements["signup-password2"],
          "Passwords do not match"
        );
      } else {
        alert("Signup Successfully");
      }
    }
  });
}

//faq
document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq-box .faq-questions");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");

      const plusIcon = faq.querySelector(".plus");
      const minusIcon = faq.querySelector(".minus");

      if (faq.classList.contains("active")) {
        plusIcon.style.display = "none";
        minusIcon.style.display = "inline";
      } else {
        plusIcon.style.display = "inline";
        minusIcon.style.display = "none";
      }
    });
  });
});

//search bar dog page
document.addEventListener("DOMContentLoaded", () => {
  const searchBoxDog = document.getElementById("search-box-dog");
  const searchButtonDog = document.getElementById("search-btn-dog");
  const searchMessage = document.querySelector(".search-message");

  searchBoxDog.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      searchButtonDog.click();
    }
  });

  searchButtonDog.addEventListener("click", () => {
    const searchValue = searchBoxDog.value.toLowerCase();
    const cardsDog = document.querySelectorAll(".cards .dog-cards");

    let count = 0;

    cardsDog.forEach((card) => {
      const content = card.textContent.toLowerCase();

      if (content.includes(searchValue)) {
        count++;
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
    if (count === 0) {
      searchMessage.style.display = "block";
    } else {
      searchMessage.style.display = "none";
    }
  });
});

// search bar cat page
document.addEventListener("DOMContentLoaded", () => {
  const searchBoxCat = document.getElementById("search-box-cat");
  const searchButtonCat = document.getElementById("search-btn-cat");
  const searchMessage = document.querySelector(".search-message");

  searchBoxCat.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      searchButtonCat.click();
    }
  });

  searchButtonCat.addEventListener("click", () => {
    const searchValue = searchBoxCat.value.toLowerCase();
    const cardsCat = document.querySelectorAll(".cards .cat-cards");

    let count = 0;

    cardsCat.forEach((card) => {
      const content = card.textContent.toLowerCase();

      if (content.includes(searchValue)) {
        count++;
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
    if (count === 0) {
      searchMessage.style.display = "block";
    } else {
      searchMessage.style.display = "none";
    }
  });
});

// search bar other page
document.addEventListener("DOMContentLoaded", () => {
  const searchBoxOther = document.getElementById("search-box-other");
  const searchButtonOther = document.getElementById("search-btn-other");
  const searchMessage = document.querySelector(".search-message");

  searchBoxOther.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      searchButtonOther.click();
    }
  });

  searchButtonOther.addEventListener("click", () => {
    const searchValue = searchBoxOther.value.toLowerCase();
    const cardsOther = document.querySelectorAll(".cards .other-cards");

    let count = 0;

    cardsOther.forEach((card) => {
      const content = card.textContent.toLowerCase();

      if (content.includes(searchValue)) {
        count++;
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
    if (count === 0) {
      searchMessage.style.display = "block";
    } else {
      searchMessage.style.display = "none";
    }
  });
});

//flipped cards 
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".flip-btn");
  const backParts = document.querySelectorAll(".back-part");

  // Flip forward 
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".dog-cards, .cat-cards, .other-cards");
      if (card) {
        const flipper = card.querySelector(".flipper");
        flipper.classList.toggle("flipped");
      }
    });
  });

  // Flip back 
  backParts.forEach((backPart) => {
    backPart.addEventListener("click", () => {
      const card = backPart.closest(".dog-cards, .cat-cards, .other-cards");
      if (card) {
        const flipper = card.querySelector(".flipper");
        flipper.classList.remove("flipped");
      }
    });
  });
});
