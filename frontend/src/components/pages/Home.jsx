import { HomeContainer, LinkButton, Logo, Title } from "./Home.style";

export default function Home() {
  return (
    <HomeContainer>
      <Logo src="/images/DevNotes.webp" />
      <Title>Welcome to the DevNotes!</Title>
      <LinkButton to="/login">ENTER</LinkButton>
    </HomeContainer>
  );
}
