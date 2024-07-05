import DashboardLayout from "../layouts/DashboardLayout";
import { Container, Image, LinkButton, Title } from "./NotFound.style";

export default function NotFound() {
  return (
    <DashboardLayout>
      <Container>
        <Image src="/images/notFound.webp" />
        <Title>PAGE NOT FOUND</Title>
        <LinkButton to="/">Home</LinkButton>
      </Container>
    </DashboardLayout>
  );
}
