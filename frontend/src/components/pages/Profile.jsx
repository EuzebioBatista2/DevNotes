import { useContext, useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import {
  AboutContainer,
  BasicDataContainer,
  BasicInformation,
  BlocksContainer,
  Buttons,
  Container,
  CreditsText,
  DataContainer,
  FooterContainer,
  FooterText,
  FormPassword,
  HomeLink,
  Icon,
  IconLink,
  ImageContainer,
  ImageLogo,
  InformationContainer,
  InformationText,
  LinksContainer,
  LogoutButton,
  PasswordButton,
  ProfileContainer,
  ProfileData,
  ProfileImage,
  TagTitle,
  Text,
  TextAbout,
  TextsContainer,
  UserName,
} from "./Profile.style";
import Input from "../common/Input";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Context from "../context/UserContext";

export default function Profile() {
  const { authenticated, logout, changePassword } = useContext(Context);
  const [user, setUser] = useState({});
  const [passwords, setPasswords] = useState({});
  const [token] = useState(localStorage.getItem("devNotes@token") || "");

  useEffect(() => {
    async function fetchData() {
      const data = await authenticated(token);
      if (data) {
        data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        setUser(data);
      }
    }

    fetchData();
  }, [token]);

  function handleChange(e) {
    e.preventDefault();
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  }

  function handleSubmitPassword(e) {
    e.preventDefault();
    changePassword(user.id, passwords);
  }

  function handleSubmitLogout(e) {
    e.preventDefault();
    logout();
  }

  return (
    <DashboardLayout>
      <Container>
        <ProfileData>
          <ProfileContainer>
            <Text>Welcome</Text>
            <ProfileImage src="/images/imageProfile.webp" />
            <UserName>{user.name}</UserName>
          </ProfileContainer>
          <Buttons>
            <HomeLink to="/dashboard/folders">Home page</HomeLink>
            <form onSubmit={handleSubmitLogout}>
              <LogoutButton>Logout</LogoutButton>
            </form>
          </Buttons>
        </ProfileData>
        <BlocksContainer>
          <InformationContainer>
            <DataContainer>
              <BasicInformation>
                <TagTitle>Basic Informations:</TagTitle>
              </BasicInformation>
              <TextsContainer>
                <InformationText>Name: {user.name}</InformationText>
                <InformationText>Email: {user.email}</InformationText>
                <InformationText>
                  Folders: {user.folders && user.folders.length}
                </InformationText>
              </TextsContainer>
            </DataContainer>
            <BasicDataContainer>
              <FormPassword onSubmit={handleSubmitPassword}>
                <Input
                  type={"password"}
                  text={"Current password"}
                  name={"currentPassword"}
                  placeholder={"Enter your current password"}
                  handelOnChange={handleChange}
                />
                <Input
                  type={"password"}
                  text={"New Password"}
                  name={"newPassword"}
                  placeholder={"Enter your password"}
                  handelOnChange={handleChange}
                />
                <Input
                  type={"password"}
                  text={"Confirm new password"}
                  name={"confirmNewPassword"}
                  placeholder={"Confirm your password"}
                  handelOnChange={handleChange}
                />
                <PasswordButton>Change password</PasswordButton>
              </FormPassword>
            </BasicDataContainer>
          </InformationContainer>
          <AboutContainer>
            <BasicInformation>
              <TagTitle>About project:</TagTitle>
            </BasicInformation>
            <ImageContainer>
              <ImageLogo src="/images/DevNotes.webp" />
              <TextAbout>
                The main objective of this project is to help people save their
                notes and use the app to access them anywhere.
              </TextAbout>
            </ImageContainer>
            <FooterContainer>
              <LinksContainer>
                <FooterText>FOLLOW</FooterText>
                <IconLink to="https://portfolio-euzebiobatista.vercel.app/">
                  <Icon icon={faBriefcase} />
                </IconLink>
                <IconLink to="https://www.linkedin.com/in/euzebio-batista/">
                  <Icon icon={faLinkedin} />
                </IconLink>
                <IconLink to="https://github.com/EuzebioBatista2">
                  <Icon icon={faGithub} />
                </IconLink>
              </LinksContainer>
              <CreditsText>
                Created for Euzebio Batista. All rights reserved.
              </CreditsText>
            </FooterContainer>
          </AboutContainer>
        </BlocksContainer>
      </Container>
    </DashboardLayout>
  );
}
