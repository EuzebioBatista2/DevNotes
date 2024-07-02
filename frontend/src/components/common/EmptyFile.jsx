import { Container, Line, TextContainer, Text, Title } from "./EmptyFile.style";
import { Icon } from "./EmptyFolder.style";

import {
  faFileCirclePlus,
  faHandPointUp,
} from "@fortawesome/free-solid-svg-icons";

export default function EmptyFile() {
  return (
    <Container>
      <Icon icon={faFileCirclePlus} />
      <Title>Add new folder</Title>
      <TextContainer>
        <Line />
        <Text>Or</Text>
        <Line />
      </TextContainer>
      <TextContainer>
        <Title>Click one</Title>
        <Icon icon={faHandPointUp} />
      </TextContainer>
    </Container>
  );
}
