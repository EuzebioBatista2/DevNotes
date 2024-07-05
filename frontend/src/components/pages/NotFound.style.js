import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
`;

export const Image = styled.img`
  height: auto;
  width: 320px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #555555;
  margin-top: -30px;
  text-align: center;
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
