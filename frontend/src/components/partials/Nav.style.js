import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  height: 70px;
  width: 100%;
  background-color: #ffecaa;
`;

export const NavLink = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const Logo = styled.h1`
  color: #555555;
  font-size: 24px;
  font-weight: bold;
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 30px;
  overflow: hidden;
`;

export const UserName = styled.p`
  font-size: 18px;
  color: #555555;
  font-weight: 300;
`;
