import { useEffect, useState } from "react";
import SunEditor from "suneditor-react";

export default function TextEditor({ data }) {
  const [content, setContent] = useState("");

  const editorConfig = {
    buttonList: [
      ["undo", "redo"],
      ["font", "fontSize", "formatBlock"],
      ["bold", "italic", "underline", "strike"],
      ["fontColor", "hiliteColor"],
      ["list", "align"],
      ["link", "table"],
    ],
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

    setContent(data);
  }, []);

  return (
    <SunEditor
      setOptions={editorConfig}
      setContents={content}
      onChange={setContent}
    />
  );
}
