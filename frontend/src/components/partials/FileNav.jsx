import { useContext, useEffect, useRef, useState } from "react";
import {
  AddContainer,
  FilesContainer,
  NavContainer,
  AddLink,
  Icon,
  Line,
  Text,
  TextEditorContainer,
  EmptyFileContainer,
  Container,
} from "./FileNav.style";
import FileCard from "../common/FileCard";

import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Context from "../context/UserContext.jsx";
import TextEditor from "../common/TextEditor.jsx";
import EmptyFile from "../common/EmptyFile.jsx";

export default function FileNav({ files, folderId }) {
  const { activatedFile, setActivatedFile } = useContext(Context);
  const [fileId, setFileId] = useState(null);

  async function handelActivateButtonAndGetFile(content) {
    if (activatedFile === content._id) {
      setActivatedFile(null);
      setFileId(null);
    } else {
      await setActivatedFile(null);
      setActivatedFile(content._id);
      setFileId(content._id);
    }
  }

  useEffect(() => {
    setActivatedFile(null);
    setFileId(null);
  }, []);

  return (
    <Container>
      {/* 180 deg */}
      <NavContainer>
        <FilesContainer>
          {files &&
            files.length > 0 &&
            files.map((file) => (
              <FileCard
                key={file._id}
                file={file}
                activate={activatedFile === file._id ? "true" : "false"}
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
      {files && files.length > 0 && activatedFile !== null ? (
        <TextEditorContainer>
          <TextEditor id={fileId} />
        </TextEditorContainer>
      ) : (
        <EmptyFileContainer>
          <EmptyFile />
        </EmptyFileContainer>
      )}
    </Container>
  );
}
