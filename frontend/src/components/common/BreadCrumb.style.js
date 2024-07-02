import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  width: 100%;
  background-color: #232323;
  padding: 0px 40px;
  gap: 10px;
`;

export const CrumbLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
`;

export const CrumbText = styled.p`
  font-size: 16px;
  color: #555555;
  font-weight: 500;
`;
