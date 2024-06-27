import { createContext, useState } from "react";
import useAuth from "../hooks/useAuth.js";

const Context = createContext({});

function UserProvider({ children }) {
  const { register, login, authenticated } = useAuth();

  return (
    <Context.Provider value={{ register, login, authenticated }}>
      {children}
    </Context.Provider>
  );
}

export { Context, UserProvider };
