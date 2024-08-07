const passwordValidation = async (password, confirmPassword) => {
  if (!password) {
    return "Password is required.";
  }

  if (!confirmPassword) {
    return "Confirm password is required.";
  }

  if (password !== confirmPassword) {
    return "Passwords don't match.";
  }

  if (password.length < 8) {
    return "At least 8 characters are required for the password.";
  }

  if (password.indexOf(" ") !== -1) {
    return "Passwords should not contain space.";
  }

  const lowercaseRegex = /[a-z]/;
  if (!lowercaseRegex.test(password)) {
    return "Password should contain at least one lowercase letter.";
  }

  const uppercaseRegex = /[A-Z]/;
  if (!uppercaseRegex.test(password)) {
    return "Password should contain at least one uppercase letter.";
  }

  const specialCharRegex = /[!@#$%^&*_+\-=\':"|,.<>\/?]/;
  if (!specialCharRegex.test(password)) {
    return "Password should contain at least one special character.";
  }

  return "Valid password.";
};

export default passwordValidation;
