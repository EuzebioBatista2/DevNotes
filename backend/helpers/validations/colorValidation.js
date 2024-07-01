const colorValidation = async (color) => {
  if (!color) {
    return "Color is required";
  }

  const validColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (!validColor.test(color)) {
    return "Format is invalid.";
  }

  return "Valid color.";
};

export default colorValidation;
