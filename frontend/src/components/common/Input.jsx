import { InputContainer, Label, InputComponent } from "./Input.style";

export default function Input({
  type,
  text,
  name,
  placeholder,
  handelOnChange,
  value,
}) {
  return (
    <InputContainer>
      <Label htmlFor={name}>{text}:</Label>
      <InputComponent
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handelOnChange}
        value={value}
      />
    </InputContainer>
  );
}
