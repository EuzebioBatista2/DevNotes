import { Container, LinkButton, Logo, Title } from "./Home.style";

export default function Home() {
  return (
    <Container>
      <Logo src="/images/DevNotes.png" />
      <Title>Welcome to the DevNotes!</Title>
      <LinkButton to="/login">ENTER</LinkButton>
    </Container>
  );
}
