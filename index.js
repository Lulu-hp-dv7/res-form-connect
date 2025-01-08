const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const passwordConfirm = document.getElementById("passwordConfirm");
const togglePasswordConfirm = document.getElementById("togglePasswordConfirm");

/**
 * Change the Type of input when I click on the icon
 * @param {HTMLInputElement} inputElement
 * @param {HTMLElement} toggleElement
 */
const togglePasswordVisibity = (inputElement, toggleElement) => {
  if (inputElement.type === "password") {
    inputElement.type = "text";
    toggleElement.innerHTML = '<i class="far fa-eye"></i>';
  } else {
    inputElement.type = "password";
    toggleElement.innerHTML = '<i class="far fa-eye-slash"></i>';
  }
};

togglePassword.addEventListener("click", () => {
  togglePasswordVisibity(passwordInput, togglePassword);
});

togglePasswordConfirm.addEventListener("click", () => {
  togglePasswordVisibity(passwordConfirm, togglePasswordConfirm);
});
