const passwordValidate = (password) => {
    if (password.length < 8) return false;
    if (!/[A-Z]/.test(password)) return false;
    return true;
}

module.exports = passwordValidate;