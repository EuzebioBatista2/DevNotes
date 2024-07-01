import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 45px 50px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderText = styled.h2`
  font-size: 24px;
  color: #555555;
  font-weight: 500;
`;

export const AddButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 40px;
  width: 180px;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 4px;
  transition: 300ms ease;

  &:hover {
    background-color: #ffecaa;
  }
`;

export const ButtonText = styled.p`
  font-size: 16px;
  color: #000;
`;

export const Icon = styled(FontAwesomeIcon)`
  height: 16px;
  width: 16px;
  color: #000;
`;

// Folders
export const FoldersContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  column-gap: 50px;
  row-gap: 10px;
  align-content: flex-start;
`;

// EmptyMessage
export const MessageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 45px 50px;
`;
