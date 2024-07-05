import AuthContainer from "../../layouts/AuthContainer";
import Input from "../../common/Input";
import {
  AuthForm,
  BoldText,
  Buttons,
  CheckboxContainer,
  CheckboxInput,
  DataContainer,
  FooterContainer,
  FooterText,
  Icon,
  IconLink,
  IconsContainer,
  LightText,
  LinkButton,
  LoginButton,
  LoginContainer,
  TextContainer,
  Title,
  TitleContainer,
} from "./Login.style";
import { Label } from "../../common/Input.style";

import { faBriefcase, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { useContext, useEffect, useState } from "react";
import Context from "../../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading.jsx";

export default function Login() {
  const [user, setUser] = useState({});
  const { login, authenticated, loading, setLoading } = useContext(Context);
  const [token] = useState(localStorage.getItem("devNotes@token") || "");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      if (token) {
        const data = await authenticated(token);
        if (data) {
          navigate("/dashboard");
        }
      }
    }
    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function handleChange(e) {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleCheckboxChange(e) {
    setUser({ ...user, remember: e.target.checked });
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(user);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <AuthContainer image={"LoginBackground.webp"}>
          <TitleContainer>
            <IconLink to="/">
              <Icon icon={faLeftLong} />
            </IconLink>
            <Title>DevNotes</Title>
          </TitleContainer>
          <DataContainer>
            <TextContainer>
              <LightText>Hello,</LightText>
              <BoldText>welcome</BoldText>
            </TextContainer>
            <LoginContainer>
              <AuthForm onSubmit={handleSubmit} method="POST">
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
                <CheckboxContainer>
                  <CheckboxInput
                    name={"remember"}
                    id={"remember"}
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor={"remember"}>Remember me</Label>
                </CheckboxContainer>
                <Buttons>
                  <LoginButton>Login</LoginButton>
                  <LinkButton to="/register">Sign up</LinkButton>
                </Buttons>
              </AuthForm>
            </LoginContainer>
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
      )}
    </>
  );
}
