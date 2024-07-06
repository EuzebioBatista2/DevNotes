const nameValidation = async (name) => {
  if (!name) {
    return "Name is required.";
  }

  if (name.length < 3) {
    return "At least 3 letters are required.";
  }

  if (name.length > 20) {
    return "Maximum of 20 letters allowed.";
  }

  if (/\d/.test(name)) {
    return "Name should not contain numbers.";
  }

  return "Valid name.";
};

export default nameValidation;
