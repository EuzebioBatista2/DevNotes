import { useNavigate } from "react-router-dom";
import useFlashMessage from "./useFlashMessage";
import devNotesApi from "../../utils/devNotesApi";

export default function useFolder() {
  const navigate = useNavigate();
  const { setFlashMessage } = useFlashMessage();

  async function newFolder(folder) {
    let msgText = "";
    let type = "";
    const token = localStorage.getItem("devNotes@token");

    try {
      const data = await devNotesApi
        .post("/dashboard/newfolder", folder, {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          return response.data;
        });

      msgText = data.message;
      type = data.type;
    } catch (error) {
      msgText = error.response.data.message;
      type = error.response.data.type;
    }

    setFlashMessage(msgText, type);
    if (type === "success") {
      navigate("dashboard/folders");
    }
  }

  async function getFolder(id) {
    let msgText = "";
    let type = "";
    const token = localStorage.getItem("devNotes@token");
    try {
      const response = await devNotesApi.get(`/dashboard/editfolder/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });
      return response.data.folder;
    } catch (error) {
      msgText = error.response.data.message;
      type = error.response.data.type;
      setFlashMessage(msgText, type);
    }
  }

  async function editFolder(folder) {
    let msgText = "";
    let type = "";
    const token = localStorage.getItem("devNotes@token");

    try {
      const data = await devNotesApi
        .post(`/dashboard/editfolder`, folder, {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          return response.data;
        });

      msgText = data.message;
      type = data.type;
    } catch (error) {
      msgText = error.response.data.message;
      type = error.response.data.type;
    }

    setFlashMessage(msgText, type);
    if (type === "success") {
      navigate("dashboard/folders");
    }
  }

  async function deleteFolder(id) {
    let msgText = "";
    let type = "";
    const token = localStorage.getItem("devNotes@token");

    try {
      const data = await devNotesApi
        .delete(`/dashboard/deletefolder/${id}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          return response.data;
        });

      msgText = data.message;
      type = data.type;
    } catch (error) {
      msgText = error.response.data.message;
      type = error.response.data.type;
    }

    setFlashMessage(msgText, type);
    if (type === "success") {
      navigate("dashboard/folders");
    }
  }

  return { newFolder, editFolder, getFolder, deleteFolder };
}
