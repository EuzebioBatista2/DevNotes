import { useContext, useState } from "react";
import {
  ContainerIcon,
  DeleteButton,
  DeleteContainer,
  DeleteMiniIcon,
  EditLink,
  EditMiniIcon,
  FolderName,
  MainIcon,
  MainLink,
} from "./Folder.style";
import {
  faFolderClosed,
  faTrash,
  faFolderOpen,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import Context from "../context/UserContext.jsx";

export default function Folder({ id, name, color }) {
  const { deleteFolder } = useContext(Context);
  const [icon, setIcon] = useState(faFolderClosed);

  function handleChangeIconOpen() {
    setIcon(faFolderOpen);
  }

  function handleChangeIconClosed() {
    setIcon(faFolderClosed);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const confirmed = window.confirm(
      `Are you sure you wish to delete the "${name}" folder?`
    );

    if (confirmed) {
      deleteFolder(id);
    }
  }

  return (
    <ContainerIcon>
      <MainLink
        to={`/dashboard/folders/${id}`}
        onMouseEnter={handleChangeIconOpen}
        onMouseLeave={handleChangeIconClosed}
        color={color}
      >
        <MainIcon icon={icon} color={color} />
        <FolderName>{name}</FolderName>
      </MainLink>

      <EditLink to={`/dashboard/folders/edit/${id}`}>
        <EditMiniIcon icon={faPenToSquare} />
      </EditLink>

      <DeleteContainer>
        <form onSubmit={handleSubmit}>
          <DeleteButton>
            <DeleteMiniIcon icon={faTrash} />
          </DeleteButton>
        </form>
      </DeleteContainer>
    </ContainerIcon>
  );
}
