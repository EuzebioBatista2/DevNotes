import { useContext, useEffect, useState } from "react";
import { Context } from "../context/UserConext";

export default function Dashboard() {
  const [user, setUser] = useState({});
  const { authenticated } = useContext(Context);
  const [token] = useState(localStorage.getItem("devNotes@token") || "");

  useEffect(() => {
    async function fetchData() {
      const data = await authenticated(token);
      await setUser(data);
    }

    fetchData();
  }, [token]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{user && user.name}</p>
    </div>
  );
}
