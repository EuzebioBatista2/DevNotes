import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: fit-content;
  width: 60px;
`;

export const MainLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  height: 100%;
  width: 60px;
  background-color: transparent;
  will-change: filter, background-color;
  transition: filter, background-color 300ms;

  &:hover {
    filter: drop-shadow(
      0em 0em 2em ${({ color }) => (color ? color : "transparent")}
    );
  }
`;

export const FolderName = styled.p`
  font-size: 16px;
  color: #555555;
  width: 60px;
  word-wrap: break-word;
`;

export const MainIcon = styled(FontAwesomeIcon)`
  height: 50px;
  width: 50px;
  color: ${({ color }) => (color ? color : "#000")};
`;

export const EditLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  position: absolute;
  background-color: #ffecaa;
  border-radius: 100%;
  top: 0px;
  left: -5px;
  transition: background-color 300ms ease;

  &:hover {
    background-color: #d7cdaa;
  }
`;

export const EditMiniIcon = styled(FontAwesomeIcon)`
  height: 10px;
  width: 10px;
  color: #555555;
`;

export const DeleteContainer = styled.div`
  position: absolute;
  top: 0px;
  right: -5px;
`;

export const DeleteButton = styled.button.attrs({ type: "submit" })`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  background-color: #e74033;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  transition: background-color 300ms ease;

  &:hover {
    background-color: #b24033;
  }
`;

export const DeleteMiniIcon = styled(FontAwesomeIcon)`
  height: 10px;
  width: 10px;
  color: #fff;
`;
