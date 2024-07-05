import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 30px 50px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    padding: 30px 20px;
  }
`;

export const ProfileData = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 250px;
  border-radius: 4px;
  padding: 40px 0px;
  background-color: #ff0100aa;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: #fff;
`;

export const ProfileImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 100%;
`;

export const UserName = styled.h2`
  font-size: 24px;
  color: #fff;
  font-weight: 500;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 10px;
`;

export const HomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 200px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: #555555;
  background-color: #f0f0f0;
`;

export const LogoutButton = styled.button.attrs({ type: "submit" })`
  height: 50px;
  width: 200px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  color: #555555;
  text-decoration: none;
  border: none;
  cursor: pointer;
`;

export const BlocksContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const InformationContainer = styled.section`
  display: flex;
  flex-direction: row;
  height: 320px;
  width: 100%;
  justify-content: space-between;
  background-color: #f5e6e0aa;
  border-radius: 4px;

  @media (max-width: 992px) {
    height: 100%;
    flex-direction: column;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 25px 30px;
  align-items: center;
`;

export const BasicInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 992px) {
    margin-bottom: 20px;
  }
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 10px;
`;

export const TagTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #555555;
`;

export const BasicDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0px 30px;

  @media (max-width: 992px) {
    padding: 25px 30px;
  }
`;

export const InformationText = styled.p`
  font-size: 16px;
  color: #555555;
`;

export const FormPassword = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 10px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const PasswordButton = styled.button.attrs({ type: "submit" })`
  height: 50px;
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  background-color: #ff0100aa;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const AboutContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 30px;
  background-color: #f5e6e0aa;
  border-radius: 4px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 20px 0px;
`;

export const ImageLogo = styled.img`
  height: auto;
  width: 250px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const TextAbout = styled.p`
  font-size: 16px;
  color: #555555;
  text-align: center;
  max-width: 500px;

  @media (max-width: 992px) {
    margin-bottom: 20px;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media (max-width: 992px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`;

export const FooterText = styled.p`
  font-size: 12px;
  color: #555555;
  font-weight: bold;
  margin: 0;
`;

export const IconLink = styled(Link)`
  text-decoration: none;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
`;

export const Icon = styled(FontAwesomeIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  color: #555555;
`;

export const CreditsContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const CreditsText = styled.p`
  font-size: 16px;
  color: #555555;
  text-align: center;
`;
