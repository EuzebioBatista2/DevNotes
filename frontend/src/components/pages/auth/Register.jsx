import AuthContainer from "../../layouts/AuthContainer";
import Input from "../../common/Input";
import {
  AuthForm,
  BoldText,
  Buttons,
  DataContainer,
  FooterContainer,
  FooterText,
  Icon,
  IconLink,
  IconsContainer,
  LightText,
  LinkButton,
  LoginButton,
  RegisterContainer,
  TextContainer,
  Title,
  TitleContainer,
} from "./Register.style";

import { faBriefcase, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { useContext, useState } from "react";
import { Context } from "../../context/UserConext";

export default function Register() {
  const [user, setUser] = useState({});

  const { register } = useContext(Context);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    console.log(user);
    e.preventDefault();
    register(user);
  }

  return (
    <AuthContainer image={"RegisterBackground.webp"}>
      <TitleContainer>
        <IconLink to="/">
          <Icon icon={faLeftLong} />
        </IconLink>
        <Title>DevNotes</Title>
      </TitleContainer>
      <DataContainer>
        <TextContainer>
          <LightText>Your first time?</LightText>
          <BoldText>welcome</BoldText>
        </TextContainer>
        <RegisterContainer>
          <AuthForm onSubmit={handleSubmit} method="POST">
            <Input
              type={"name"}
              text={"Name"}
              name={"name"}
              placeholder={"Enter your name"}
              handelOnChange={handleChange}
            />
            <Input
              type={"email"}
              text={"Email"}
              name={"email"}
              placeholder={"Enter your email"}
              handelOnChange={handleChange}
            />
            <Input
              type={"password"}
              text={"Password"}
              name={"password"}
              placeholder={"Enter your password"}
              handelOnChange={handleChange}
            />
            <Input
              type={"password"}
              text={"Confirm password"}
              name={"confirmPassword"}
              placeholder={"Confirm your password"}
              handelOnChange={handleChange}
            />
            <Buttons>
              <LoginButton>Register</LoginButton>
              <LinkButton to="/login">Sign in</LinkButton>
            </Buttons>
          </AuthForm>
        </RegisterContainer>
      </DataContainer>
      <FooterContainer>
        <FooterText>FOLLOW</FooterText>
        <IconsContainer>
          <IconLink to="https://portfolio-euzebiobatista.vercel.app/">
            <Icon icon={faBriefcase} />
          </IconLink>
          <IconLink to="https://www.linkedin.com/in/euzebio-batista/">
            <Icon icon={faLinkedin} />
          </IconLink>
          <IconLink to="https://github.com/EuzebioBatista2">
            <Icon icon={faGithub} />
          </IconLink>
        </IconsContainer>
      </FooterContainer>
    </AuthContainer>
  );
}
