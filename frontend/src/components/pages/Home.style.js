import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-image: url("/images/HomeBackground.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: #ee0000;
  font-size: 2.5em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.2em;
  }
`;

export const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  height: 50px;
  width: 150px;
  margin-top: 20px;
  border-radius: 4px;
  background-color: rgba(238, 0, 0, 0.6);
  will-change: filter, background-color;
  transition: filter, background-color 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em rgba(238, 0, 0, 0.6));
  }
`;
