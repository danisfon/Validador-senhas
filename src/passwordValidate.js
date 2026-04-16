const hasMinLength = (password) => password.length >= 8;
const hasUpperCase = (password) => /[A-Z]/.test(password);
const hasLowerCase = (password) => /[a-z]/.test(password);
const hasNumber = (password) => /[0-9]/.test(password);
const hasSpecialChar = (password) => /[!@#$%^&*]/.test(password);
const hasNoSpaces = (password) => !/\s/.test(password);

const passwordValidate = (password) => {
  return (
    hasMinLength(password) &&
    hasUpperCase(password) &&
    hasLowerCase(password) &&
    hasNumber(password) &&
    hasSpecialChar(password) &&
    hasNoSpaces(password)
  );
};

module.exports = passwordValidate;