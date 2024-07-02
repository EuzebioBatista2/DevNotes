import { useContext, useEffect, useRef, useState } from "react";
import File from "../common/File.jsx";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import FileNav from "../partials/FileNav.jsx";
import Nav from "../partials/Nav.jsx";
import Context from "../context/UserContext.jsx";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { useParams } from "react-router-dom";
import EmptyFile from "../common/EmptyFile.jsx";
import { EmptyFileContainer, TextEditorContainer } from "./Files.style.js";
import BreadCrumb from "../common/BreadCrumb.jsx";
import TextEditor from "../common/TextEditor.jsx";

export default function Files() {
  const { folderId } = useParams();
  const { activatedFile, authenticated, getFiles, content } =
    useContext(Context);
  const [user, setUser] = useState({});
  const [files, setFiles] = useState([]);
  const [token] = useState(localStorage.getItem("devNotes@token") || "");

  useEffect(() => {
    async function fetchData() {
      const data = await authenticated(token);
      await setUser(data);
      const allFiles = await getFiles(folderId);
      await setFiles(allFiles);
    }

    fetchData();
  }, [token, authenticated]);

  return (
    <DashboardLayout>
      <Nav name={user.name} />
      <BreadCrumb />
      <FileNav files={files} folderId={folderId} />
      {files && files.length > 0 && activatedFile !== null ? (
        <TextEditorContainer>
          <TextEditor data={content} />
        </TextEditorContainer>
      ) : (
        <EmptyFileContainer>
          <EmptyFile />
        </EmptyFileContainer>
      )}
    </DashboardLayout>
  );
}
