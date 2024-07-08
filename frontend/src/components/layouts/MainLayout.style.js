import styled from "styled-components";

export const Container = styled.main`
  margin: 0;
  padding: 0;
  height: calc(${(props) => props.$vh}px * 100);
  width: 100%;
  position: relative;
`;
