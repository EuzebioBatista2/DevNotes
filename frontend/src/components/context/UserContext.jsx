import { createContext, useState } from "react";
import useAuth from "../hooks/useAuth.js";
import useFolder from "../hooks/useFolder.js";

const Context = createContext({});

function UserProvider({ children }) {
  const { register, login, authenticated } = useAuth();
  const { newFolder, getFolder, editFolder, deleteFolder } = useFolder();
  const [activatedFile, setActivatedFile] = useState();

  return (
    <Context.Provider
      value={{
        register,
        login,
        authenticated,
        activatedFile,
        setActivatedFile,
        newFolder,
        getFolder,
        editFolder,
        deleteFolder,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export default Context;
export { UserProvider };
