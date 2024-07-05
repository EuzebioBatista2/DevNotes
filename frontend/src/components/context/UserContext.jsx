import { createContext, useState } from "react";
import useAuth from "../hooks/useAuth.js";
import useFolder from "../hooks/useFolder.js";

const Context = createContext({});

function UserProvider({ children }) {
  const { register, login, authenticated, logout, changePassword } = useAuth();
  const {
    newFolder,
    getFolder,
    editFolder,
    deleteFolder,
    getFiles,
    verifyFolder,
    newFile,
    getFile,
    saveFileContent,
    updateFile,
    deleteFile,
  } = useFolder();
  const [activatedFile, setActivatedFile] = useState(0);
  const [loading, setLoading] = useState(true);

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
        getFiles,
        verifyFolder,
        newFile,
        getFile,
        saveFileContent,
        updateFile,
        deleteFile,
        logout,
        changePassword,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export default Context;
export { UserProvider };
