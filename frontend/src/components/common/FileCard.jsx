import { useContext } from "react";
import { FileName, Icon, TagFile, IconButton } from "./FileCard.style";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Context from "../context/UserContext.jsx";

export default function FileCard({ note, activate, handleClick }) {
  return (
    <TagFile onClick={() => handleClick(note.id)} $activate={activate}>
      <FileName>{note.name}</FileName>
      <form action="" method="post">
        <IconButton type="submit">
          <Icon icon={faCircleXmark} />
        </IconButton>
      </form>
    </TagFile>
  );
}
