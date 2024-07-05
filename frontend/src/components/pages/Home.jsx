import { useContext, useEffect } from "react";
import { HomeContainer, LinkButton, Logo, Title } from "./Home.style";
import Context from "../context/UserContext";
import Loading from "./Loading";

export default function Home() {
  const { loading, setLoading } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <HomeContainer>
          <Logo src="/images/DevNotes.webp" />
          <Title>Welcome to the DevNotes!</Title>
          <LinkButton to="/login">ENTER</LinkButton>
        </HomeContainer>
      )}
    </>
  );
}
