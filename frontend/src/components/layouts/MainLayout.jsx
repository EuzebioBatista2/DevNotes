import { Container } from "./MainLayout.style"

export default function MainLayout({children}) {
  return (
    <Container>
      {children}
    </Container>
  )
}