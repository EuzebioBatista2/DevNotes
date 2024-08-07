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

  @media (max-width: 500px) {
    padding: 20px 20px;
  }
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

export const AuthLink = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
  text-decoration: none;
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
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  white-space: nowrap;
  text-align: end;
  width: 100%;

  @media (max-width: 400px) {
    width: 70px;
  }

  @media (max-width: 340px) {
    width: 40px;
  }
`;
