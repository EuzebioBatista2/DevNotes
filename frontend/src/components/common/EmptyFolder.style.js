import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  height: 60px;
  width: 60px;
  color: #555555;
`;

export const MainText = styled.h3`
  font-size: 32px;
  color: #555555;
  text-align: center;
`;

export const SubText = styled.p`
  font-size: 20px;
  color: #787878;
  text-align: center;
`;
