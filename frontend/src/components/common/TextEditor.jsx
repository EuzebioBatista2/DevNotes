import { useContext, useEffect, useState } from "react";
import SunEditor from "suneditor-react";
import Context from "../context/UserContext";
import { useParams } from "react-router-dom";

export default function TextEditor({ id }) {
  const { editFile } = useContext(Context);
  const { folderId } = useParams();
  const [text] = useState(
    JSON.parse(localStorage.getItem("devNotes@files"))[id]?.content || ""
  );

  function handleText(newContent) {
    const files = JSON.parse(localStorage.getItem("devNotes@files"));
    files[id] = { content: newContent };
    localStorage.setItem("devNotes@files", JSON.stringify(files));
  }

  function saveToDatabase() {
    const content = JSON.parse(localStorage.getItem("devNotes@files"))[id]
      .content;
    const file = {
      id: id,
      content: content,
    };
    editFile(folderId, file);
  }

  const editorConfig = {
    buttonList: [
      ["undo", "redo"],
      ["font", "fontSize", "formatBlock"],
      ["bold", "italic", "underline", "strike"],
      ["fontColor", "hiliteColor"],
      ["list", "align"],
      ["link", "table"],
      ["save"],
    ],
    callBackSave: saveToDatabase,
  };

  useEffect(() => {
    const sunEditor = document.querySelector(".sun-editor");
    const sunEditorContainer = document.querySelector(".se-wrapper");
    const sunEditorText = document.querySelector(".sun-editor-editable");

    if (sunEditor && sunEditorContainer && sunEditorText) {
      sunEditor.style.height = "100%";
      sunEditorContainer.style.height = "100%";
      sunEditorText.style.height = "100%";
    }
  }, []);

  return (
    <SunEditor
      setOptions={editorConfig}
      setContents={text}
      onChange={handleText}
    />
  );
}
