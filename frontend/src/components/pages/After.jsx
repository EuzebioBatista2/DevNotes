import { useContext, useEffect, useRef, useState } from "react";
import File from "../common/File";
import DashboardLayout from "../layouts/DashboardLayout";
import FileNav from "../partials/FileNav";
import Nav from "../partials/Nav";
import Context from "../context/UserContext.jsx";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

export default function Dashboard() {
  const { authenticated } = useContext(Context);
  const [user, setUser] = useState({});
  const [token] = useState(localStorage.getItem("devNotes@token") || "");
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
    async function fetchData() {
      const data = await authenticated(token);
      await setUser(data);
    }

    fetchData();
  }, [token, authenticated]);

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
    <DashboardLayout>
      <Nav name={user.name} />
      <FileNav
        notes={[
          { id: "1", name: "file.txt", content: "text" },
          { id: "2", name: "file.txt", content: "text" },
          { id: "3", name: "file.txt", content: "text" },
          { id: "4", name: "file.txt", content: "text" },
          { id: "5", name: "file.txt", content: "text" },
          { id: "6", name: "file.txt", content: "text" },
          { id: "7", name: "file.txt", content: "text" },
          { id: "8", name: "file.txt", content: "text" },
          { id: "9", name: "file.txt", content: "text" },
          { id: "10", name: "file.txt", content: "text" },
        ]}
      />
      <File>
        <SunEditor
          setOptions={editorConfig}
          setContents={content}
          onChange={setContent}
        />
      </File>
    </DashboardLayout>
  );
}
