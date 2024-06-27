const emailValidation = async (email) => {
  if (!email) {
    return "Email is required.";
  }

  if (email.indexOf(" ") !== -1) {
    return "Email should not contain spaces.";
  }

  if (email.indexOf("@") === -1) {
    return "Email should contain @.";
  }

  const lastAtPosition = email.lastIndexOf("@");
  if (email.indexOf(".", lastAtPosition) === -1) {
    return "Email should contain dot after @.";
  }

  const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!validEmailRegex.test(email)) {
    return "Invalid email format.";
  }

  return "Valid email.";
};

export default emailValidation;
