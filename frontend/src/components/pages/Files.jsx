import { useContext, useEffect, useRef, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import FileNav from "../partials/FileNav.jsx";
import Nav from "../partials/Nav.jsx";
import Context from "../context/UserContext.jsx";
import "suneditor/dist/css/suneditor.min.css";
import { useParams } from "react-router-dom";
import BreadCrumb from "../common/BreadCrumb.jsx";

export default function Files() {
  const { folderId } = useParams();
  const { authenticated, getFiles } = useContext(Context);
  const [user, setUser] = useState({});
  const [userFiles, setUserFiles] = useState([]);
  const [token] = useState(localStorage.getItem("devNotes@token") || "");

  useEffect(() => {
    async function fetchData() {
      const data = await authenticated(token);
      setUser(data);
      const allFiles = await getFiles(folderId);
      setUserFiles(allFiles);
      if (allFiles) {
        const cacheFiles = allFiles.reduce((acc, item) => {
          acc[item._id] = {
            content: `${item.content}`,
          };
          return acc;
        }, {});
        localStorage.setItem("devNotes@files", JSON.stringify(cacheFiles));
      }
    }

    fetchData();
  }, [token]);

  return (
    <DashboardLayout>
      <Nav name={user.name} />
      <BreadCrumb />
      <FileNav files={userFiles} folderId={folderId} />
    </DashboardLayout>
  );
}
