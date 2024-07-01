import { Icon, MainText, MessageContainer, SubText } from "./EmptyFolder.style";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

export default function EmptyFolder() {
  return (
    <MessageContainer>
      <Icon icon={faFolderPlus} />
      <MainText>There’s no folders in the moment.</MainText>
      <SubText>Click on the button above and create a folder.</SubText>
    </MessageContainer>
  );
}
