import DashboardLayout from "../layouts/DashboardLayout";
import { Gif } from "./Loading.style";
import { Container } from "./NotFound.style";

export default function Loading() {
  return (
    <DashboardLayout>
      <Container>
        <Gif src="/gifs/loading.gif" />
      </Container>
    </DashboardLayout>
  );
}
