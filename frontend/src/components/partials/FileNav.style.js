import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 36px;
  width: 100%;
`;

export const FilesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding-right: 10px;
  background-color: #555555;
  overflow-x: scroll;
  white-space: nowrap;
  gap: 6px;
  transform: rotateX(180deg);

  &::-webkit-scrollbar {
    background: #555555;
    height: 4px;
    width: 30%;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c9c9c9;
    border-radius: 4px;
  }
`;

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const AddLink = styled(Link)`
  display: flex;
  height: 20px;
  width: 20px;
`;

export const Icon = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
  color: #fff;
  transition: 300ms ease;

  &:hover {
    color: #ffecaa;
  }
`;

export const Line = styled.hr`
  display: flex;
  width: 100%;
  position: absolute;
  border: 1px solid #fff;
  bottom: 0px;
  z-index: 1;
`;
