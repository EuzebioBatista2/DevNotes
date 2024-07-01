const folderNameValidation = async (name) => {
  if (!name) {
    return "Name is required.";
  }

  if (name.length < 3) {
    return "At least 3 letters are required.";
  }

  if (name.length > 20) {
    return "Maximum of 20 letters allowed.";
  }

  return "Valid name.";
};

export default folderNameValidation;
