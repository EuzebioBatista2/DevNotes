import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
`;

export const Icon = styled(FontAwesomeIcon)`
  height: 60px;
  width: 60px;
  color: #555555;

  @media (max-width: 500px) {
    height: 50px;
    width: 50px;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  color: #555555;
  font-weight: 500;

  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Line = styled.hr`
  border: 1px solid #555555;
  height: 1px;
  width: 40px;
`;

export const Text = styled.p`
  font-size: 36px;
  color: #555555;

  @media (max-width: 500px) {
    font-size: 26px;
  }
`;
