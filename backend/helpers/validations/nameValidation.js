const nameValidation = async (name) => {
  if (!name) {
    return "Name is required.";
  }

  if (name.length < 4) {
    return "At least 3 letters are required.";
  }

  if (name.length > 30) {
    return "Maximum of 30 letters allowed.";
  }

  if (/\d/.test(name)) {
    return "Name should not contain numbers.";
  }

  return "Valid name.";
};

export default nameValidation;
