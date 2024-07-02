import { useContext } from "react";
import { FileName, Icon, TagFile, IconButton } from "./FileCard.style";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function FileCard({ file, activate, handleClick }) {
  return (
    <TagFile
      onClick={() => handleClick(file.id, file.content)}
      $activate={activate}
    >
      <FileName>{file.name}</FileName>
      <form action="" method="post">
        <IconButton type="submit">
          <Icon icon={faCircleXmark} />
        </IconButton>
      </form>
    </TagFile>
  );
}
