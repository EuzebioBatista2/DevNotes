import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  width: 400px;
  padding: 30px 10px;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 4px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const Icon = styled(FontAwesomeIcon)`
  height: 50px;
  width: 50px;
  color: ${({ color }) => color ?? "#555555"};
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #555555;
`;

export const DataContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const AddButton = styled.button.attrs({ type: "submit" })`
  height: 40px;
  width: 140px;
  background-color: #ffecaa;
  opacity: 0.85;
  color: #555555;
  font-weight: bold;
  font-size: 16px;
  border: none;
  transition: opacity 300ms ease;

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
    background-color: #ffecaa;
  }
`;

export const SubText = styled.p`
  font-size: 16px;
  color: #555555;
`;
