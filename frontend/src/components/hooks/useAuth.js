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
    await localStorage.setItem("devNotes@token", JSON.stringify(token));
  }

  async function authenticated(token) {
    try {
      const response = await devNotesApi.post("/auth/user", "", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });
      return response.data.user;
    } catch (error) {
      const msgText = error.response.data.message;
      const type = error.response.data.type;

      setFlashMessage(msgText, type);
      navigate("/login");
    }
  }

  return { register, login, authenticated };
}
