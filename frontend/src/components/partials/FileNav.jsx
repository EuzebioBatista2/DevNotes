import { useContext, useEffect, useRef, useState } from "react";
import {
  AddContainer,
  FilesContainer,
  Icon,
  NavContainer,
  AddLink,
  Line,
} from "./FileNav.style";
import FileCard from "../common/FileCard";

import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Context from "../context/UserContext.jsx";

export default function FileNav({ notes }) {
  const { activatedFile, setActivatedFile } = useContext(Context);

  function handelActivateButton(id) {
    setActivatedFile(id);
  }

  return (
    // 180 deg
    <NavContainer>
      <FilesContainer>
        {notes.map((note, index) => (
          <FileCard
            key={index}
            note={note}
            activate={activatedFile === note.id ? "true" : "false"}
            handleClick={handelActivateButton}
          />
        ))}
        <AddContainer>
          <AddLink>
            <Icon icon={faCirclePlus} />
          </AddLink>
        </AddContainer>
      </FilesContainer>
      <Line />
    </NavContainer>
  );
}
