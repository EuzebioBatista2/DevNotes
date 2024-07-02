import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  height: 48px;
  width: 48px;
  color: #555555;
`;

export const Title = styled.h2`
  font-size: 40px;
  color: #555555;
  font-weight: 500;
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
`;
