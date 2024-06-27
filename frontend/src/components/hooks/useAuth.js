import devNotesApi from "../../utils/devNotesApi";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  async function register(user) {
    console.log(user);
    try {
      const data = await devNotesApi
        .post("/auth/register", user)
        .then((response) => {
          console.log(response.data);
          return response.data;
        });

      console.log(data);
    } catch (error) {
      console.log(error.response.data.messsage);
    }
  }

  return { register };
}
