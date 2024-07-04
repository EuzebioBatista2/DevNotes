import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #555555;
`;

export const IconLink = styled(Link)`
  text-decoration: none;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DataContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const LightText = styled.h2`
  font-size: 50px;
  font-weight: 300;
  color: #deb1a0;
`;

export const BoldText = styled.h2`
  font-size: 60px;
  font-weight: bold;
  color: #deb1a0;
  margin-top: -20px;
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const RegisterButton = styled.button.attrs({ type: "submit" })`
  height: 40px;
  width: 140px;
  background-color: #deb1a0;
  opacity: 0.85;
  color: #555555;
  font-weight: bold;
  font-size: 16px;
  border: none;
  transition: opacity 300ms ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 140px;
  background-color: transparent;
  opacity: 0.85;
  text-decoration: none;
  color: #555555;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid #555555;
  border-radius: 4px;
  transition: background-color 300ms ease;

  &:hover {
    background-color: #deb1a0;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

export const FooterText = styled.p`
  font-size: 12px;
  color: #555555;
  font-weight: bold;
  margin: 0;
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
