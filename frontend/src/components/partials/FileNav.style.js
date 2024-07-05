import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const NavContainer = styled.nav`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 36px;
  min-height: 36px;
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
    background: #303030;
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

export const Icon = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
  color: #fff;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #fff;
  transform: rotateX(180deg);
`;

export const AddLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 20px;
  width: 100%;
  margin-left: 10px;
  text-decoration: none;
  gap: 5px;
  transition: 300ms ease;

  &:hover ${Icon} {
    color: #ffecaa;
  }

  &:hover ${Text} {
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

export const TextEditorContainer = styled.div`
  flex: 1;
`;

export const EmptyFileContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
