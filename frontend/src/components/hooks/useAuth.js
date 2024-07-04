import devNotesApi from "../../utils/devNotesApi.js";
import { useNavigate } from "react-router-dom";
import useFlashMessage from "./useFlashMessage.js";

export default function useAuth() {
  const navigate = useNavigate();
  const { setFlashMessage } = useFlashMessage();

  async function login(user) {
    let msgText = "";
    let type = "";

    try {
      const data = await devNotesApi
        .post("/auth/login", user)
        .then((response) => {
          return response.data;
        });

      msgText = data.message;
      type = data.type;
      saveToken(data.token);
    } catch (error) {
      msgText = error.response.data.message;
      type = error.response.data.type;
    }

    setFlashMessage(msgText, type);
    if (type === "success") {
      navigate("dashboard/folders");
    }
  }

  async function register(user) {
    let msgText = "";
    let type = "";
    try {
      const data = await devNotesApi
        .post("/auth/register", user)
        .then((response) => {
          return response.data;
        });

      msgText = data.message;
      type = data.type;
      saveToken(data.token);
    } catch (error) {
      msgText = error.response.data.message;
      type = error.response.data.type;
    }

    setFlashMessage(msgText, type);
    if (type === "success") {
      navigate("dashboard/folders");
    }
  }

  async function saveToken(token) {
    localStorage.setItem("devNotes@token", JSON.stringify(token));
  }

  async function isJson(token) {
    try {
      JSON.parse(token);
      return true;
    } catch (e) {
      return false;
    }
  }

  async function authenticated(token) {
    let msgText = "";
    let type = "";
    const validToken = await isJson(token);

    if (!validToken) {
      msgText = "Invalid token.";
      type = "error";
      setFlashMessage(msgText, type);
      navigate("/login");
      return;
    }

    try {
      const response = await devNotesApi.post("/auth/user", "", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });
      return response.data.user;
    } catch (error) {
      msgText = error.response.data.message;
      type = error.response.data.type;
      localStorage.removeItem("devNotes@files");
      setFlashMessage(msgText, type);
      navigate("/login");
    }
  }

  function logout() {
    const msgText = "Logout successfully, See you soon!";
    const msgType = "success";

    localStorage.removeItem("devNotes@token");
    localStorage.removeItem("devNotes@files");
    navigate("/");

    setFlashMessage(msgText, msgType);
  }

  async function changePassword(userId, passwords) {
    let msgText = "";
    let type = "";
    const token = localStorage.getItem("devNotes@token");

    try {
      const data = await devNotesApi
        .post(`/auth/changepassword/${userId}`, passwords, {
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
      localStorage.removeItem("devNotes@token");
      localStorage.removeItem("devNotes@files");
      navigate("/login");
    }
  }

  return { register, login, authenticated, logout, changePassword };
}
