import { useContext } from "react";
import { FileName, Icon, TagFile, IconButton } from "./FileCard.style";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Context from "../context/UserContext";
import { useParams } from "react-router-dom";

export default function FileCard({ file, activate, handleClick }) {
  const { deleteFile } = useContext(Context);
  const { folderId } = useParams();

  function handleDeleteFile(e) {
    e.preventDefault();
    const confirmed = window.confirm(
      `Are you sure you wish to delete the "${file.name}" file? Make sure to save the changes of other files before executing the delete.`
    );

    if (confirmed) {
      deleteFile(folderId, file._id);
    }
  }

  return (
    <TagFile onClick={() => handleClick(file)} $activate={activate}>
      <FileName>{file.name}</FileName>
      <form onSubmit={handleDeleteFile}>
        <IconButton type="submit">
          <Icon icon={faCircleXmark} />
        </IconButton>
      </form>
    </TagFile>
  );
}
