import { 
  Container, 
  DataContainer, 
  Image, 
  ImageContainer 
} from "./AuthContainer.style";

export default function AuthContainer({ children, image }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={`/images/${image}`} />
      </ImageContainer>
      <DataContainer>
        {children}
      </DataContainer>
    </Container>
  );
}
