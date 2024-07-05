import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  min-height: 740px;
  width: 100%;
  overflow-y: hidden;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 60%;

  @media (max-width: 992px) {
    flex: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
  padding: 60px 70px;

  @media (max-width: 992px) {
    width: 450px;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 60px 30px;
  }
`;
