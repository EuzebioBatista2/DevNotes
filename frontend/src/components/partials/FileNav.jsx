import { useContext, useEffect, useRef, useState } from "react";
import {
  AddContainer,
  FilesContainer,
  NavContainer,
  AddLink,
  Icon,
  Line,
  Text,
} from "./FileNav.style";
import FileCard from "../common/FileCard";

import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Context from "../context/UserContext.jsx";

export default function FileNav({ files, folderId }) {
  const { activatedFile, setActivatedFile, setContent } = useContext(Context);

  async function handelActivateButtonAndGetFile(id, content) {
    if (activatedFile === id) {
      setActivatedFile(null);
      setContent("");
    } else {
      setActivatedFile(id);
      setContent(content);
    }
  }

  useEffect(() => {
    setActivatedFile(null);
    setContent("");
  }, []);

  return (
    // 180 deg
    <NavContainer>
      <FilesContainer>
        {files &&
          files.length > 0 &&
          files.map((file) => (
            <FileCard
              key={file.id}
              file={file}
              activate={activatedFile === file.id ? "true" : "false"}
              handleClick={handelActivateButtonAndGetFile}
            />
          ))}
        <AddContainer>
          <AddLink to={`/dashboard/files/createfile/${folderId}`}>
            <Icon icon={faCirclePlus} />
            <Text>Add new file</Text>
          </AddLink>
        </AddContainer>
      </FilesContainer>
      <Line />
    </NavContainer>
  );
}
