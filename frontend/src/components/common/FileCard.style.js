import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const TagFile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 26px;
  width: 250px;
  min-width: 250px;
  padding: 0px 24px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 0px;
  background-color: ${({ $activate }) =>
    $activate === "true" ? "#fff" : "#F4E5DF"};
  top: ${({ $activate }) => ($activate === "true" ? "-1px" : "0xp")};
  gap: 6px;
  cursor: pointer;
  z-index: 40;
  transform: rotateX(180deg);
`;

export const FileName = styled.p`
  font-size: 16px;
  color: #555555;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const IconLink = styled(Link)`
  text-decoration: none;
`;

export const EditIcon = styled(FontAwesomeIcon)`
  height: 16px;
  width: 16px;
  color: #c6950c;
`;

export const IconButton = styled.button.attrs({ type: "submit" })`
  display: flex;
  text-decoration: none;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
`;

export const Icon = styled(FontAwesomeIcon)`
  height: 16px;
  width: 16px;
  color: #f0877e;
`;
